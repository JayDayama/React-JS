import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


// if we export this class one will have to convert it to object to access inner methods and elements
export class AuthService{
    client = new Client();
    // if one does .set... over here that means by default it will be created wastage of space so we should only set when we create this class or service therfore constructor
    account;
    // account will be created as per the client details and all hence we first need client completely

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // when we use some other application instead of appwrite we just need to change the construtor from inside and just the account.create.... according to the service we will be using. but the wrapper will remain the same

    async createAccount({email,password,name}){
        try {
            // ** in create we have our id at first **
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // a method to login the user directly if account exists or is created
                // login method expects a object
                return this.login({email,password})
                // return this.login(email,password)
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error)
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            // await this.account.deleteSession('current');
        } catch (error) {
            console.log("Appwrite service :: logout :: error ", error)
        }
    }
}

const authService = new AuthService()

// i can just do AuthService.login() or whatever hence we created a new object
export default authService

// general structure :-

// const client = new Client()
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create({
//     userId: ID.unique(), 
//     email: 'email@example.com', 
//     password: 'password'
// });