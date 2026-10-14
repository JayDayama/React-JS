import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const {username} = useParams()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/jaydayama')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    // loader koi data de dega (api call se fetch karne ke baad mila hua data)
    const data = useLoaderData()
  return (
    // idhar value apne aap thodi aa jayegi koi toh hook hoga hi
    <div className="text-center bg-gray-600 text-white text-2xl p-4 m-4">Github Followers : {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/jaydayama')
    return response.json()
}