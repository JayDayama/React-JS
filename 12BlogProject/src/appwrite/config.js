import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket; // storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        // this.documentsDB = new DocumentsDB(this.client); -> new alternative
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // database id
                conf.appwriteCollectionId,
                slug, // document id
                {
                    // what do we need to store in db :
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

                // newer method :-
                // databaseId: conf.appwriteDatabaseId,
                // collectionId: conf.appwriteCollectionId,
                // documentId: slug,
                // data: {
                //     title,
                //     content,
                //     featuredImage,
                //     status,
                //     userId,
                // }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error ", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error ", error)
            return false
        }
    }

    // for a single post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ", error);
            return false
        }
    }

    // we need index's to apply queries
    // to get all the post's we can use listDocuments but we need only the active one's therfore we need queries
    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            // this will return in array
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // or we could have done :
                // [
                //     Query.equal("status" , "active")
                // ]
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error);
            return false;
        }
    }

    // file upload service -> we genereally upload this in a seperate file
    async uploadFile(file){
        try {
            // this return will give us a fileId
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // file id
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ", error);
            return false;
        }
    }

    // Delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ", error);
            return false;
        }
    }

    // file preview -> very faqst response no async required
    // -> returns kind of a url like where was the thing (of the given id)
    // file preview -> very fast response no async required
    getFilePreview(fileId){
        // CHANGE: this.bucket.getFilePreview -> this.bucket.getFileView
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
    // getFilePreview(fileId){
    //     return this.bucket.getFilePreview(
    //         conf.appwriteBucketId,
    //         fileId
    //     )
    // }
}

const service = new Service()
export default service