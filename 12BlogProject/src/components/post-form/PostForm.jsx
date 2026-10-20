import React , {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button,Input,Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// edit the post or create a new one

function PostForm({post}) {
    
    // watch to continiously monitor the form
    // control -> to get control over the form and we pass this control to the rte waha se jo bhi hai control mei mil jayega
    const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
        defaultValues: {
            title : post?.title || '',
            slug : post?.slug || '',
            content : post?.content || '',
            status : post?.status || 'active',
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        if(post){
            // new image upload : 
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            // old image delete :
            if(file){
                appwriteService.deleteFile(post.featuredImage)
                // -> we have access to post
            }
            // slug = post.$id(post-id)
            const dbPost = await appwriteService.updatePost(post.$id,{
                ...data,
                featuredImage : file ? file.$id : undefined,
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            // we do not have anything to update i.e : create a new form
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if(file) {
                const fileId = file.$id
                data.featuredImage = fileId
                // send the remaining things as it is in the form :
                // this is may be a timeconsuming task hence use await
                const dbPost = await appwriteService.createPost({
                    ...data,
                    // we need the user information too :
                    userId : userData.$id,
                })
                if(dbPost){
                    // if the dbpost exisits navigate the user to it
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    // it is like we have 2 input fields one is title and one is slug we need to watch the title and slug mei accordingly/... value generate karni hai
    // like if user types a space replace it with '-'
    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            // [] -> means range of something and ^ means negate this and replace everything else 
            // .replace(/^[a-zA-Z\d]+/g, '-') -> this would have worked too
            .replace(/[^a-zA-Z\d\s]+/g, '-')
            .replace(/\s+/g,'-')
        }
        return ''
    } , [])

    React.useEffect(() => {
        const subscription = watch((value , {name}) => {
            if(name == 'title') {
                // input field name slug
                setValue('slug' , slugTransform(value.title,
                    {shouldValidate : true}))
            }
        })

        // how can we optimize the method??
        return () => {
            subscription.unsubscribe()
        }
    } , [watch,slugTransform,setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        {/* left -> 2/3 and right -> 1/3 */}
        <div className="w-2/3 px-2">
            <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
  )
}

export default PostForm