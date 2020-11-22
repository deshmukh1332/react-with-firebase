import React ,{useState,useEffect} from 'react'
import { PageHeader, Card } from 'antd';
import 'antd/dist/antd.css';
import {Link}from '@reach/router'
import db from '../firebase'
const Posts = (props)=>{

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        let postRef=db.collection('posts')
        postRef.get().then(
            post=>{
                posts.forEach(
                    post=>{
                        let data=post.data()
                        let {id}=post
                        let payload ={
                            id,
                            ...data
                        }
                        setPosts((posts=>[...posts,payload]))
                    }
                )
            }
        )
    },[])

    return(
        <div className="posts_container">
            <div class = "page_header_container">
                <PageHeader
                    style={{
                        border:'2px solid rgb(135,237,248)',
                        margin:'16px',
                    }}
                    title="Default Posts"
                    extra={<Link to="/create_post">create</Link>}
                />
            </div>
            <div className = "articles_container">
                <div className="articles_container">
                <Card
                    style={{ margin: 16,border:'2px solid black' }}
                    type="inner"
                    title="first"
                    extra={<Link to="/post/:id">More</Link>}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tempore quis voluptatum id, aliquam culpa, non dolores ipsum impedit deleniti explicabo laudantium consequatur itaque iure a beatae. Aperiam, necessitatibus.
                </Card>
                </div>
                <div className="articles_container">
                <Card
                    style={{ margin: 16,border:'2px solid black' }}
                    type="inner"
                    title="second"
                    extra={<Link to="/post/:id">More</Link>}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tempore quis voluptatum id, aliquam culpa, non dolores ipsum impedit deleniti explicabo laudantium consequatur itaque iure a beatae. Aperiam, necessitatibus.
                </Card>
                </div><div className="articles_container">
                <Card
                    style={{ margin: 16,border:'2px solid black' }}
                    type="inner"
                    title="thirs"
                    extra={<Link to="/post/:id">More</Link>}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tempore quis voluptatum id, aliquam culpa, non dolores ipsum impedit deleniti explicabo laudantium consequatur itaque iure a beatae. Aperiam, necessitatibus.
                </Card>
                </div>
            </div>
        </div>
    )
}
export default Posts;