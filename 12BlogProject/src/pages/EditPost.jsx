import React , {useEffect,useState} from 'react'
import {Container , PostForm} from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post , setPosts] = useState(null)
    // because we need to edit user will click on that and then we will go to that page which will be available in the url
    const {slug} = useParams() // for extracting something from the url
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    } , [slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost