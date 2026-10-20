import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

// not availabe in state hence over here our service will apply the query

// for the option when we click the post it expands in app
function PostCard({$id, title, featuredImage}) {
    // console.log("Post Title:", title, "Image ID:", featuredImage);
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
              {/* Safely check if featuredImage exists before requesting the preview */}
                {featuredImage ? (
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        // src={appwriteService.getFileView(featuredImage)} 
                        alt={title} 
                        className='rounded-xl'
                    />
                ) : (
                    // Fallback block if the image is missing
                    <div className="w-full h-40 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
                        No Image Available
                    </div>
                )}
                {/* <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/> */}
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard