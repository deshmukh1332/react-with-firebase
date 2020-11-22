import { PageHeader,Input,Button } from 'antd'
import React,{useState} from 'react'
import {Link}from '@reach/router'
import db from '../firebase'

const{TextArea}=Input;

const CreatePost = (props)=>{

    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    
    const onTitleChange=(event)=>{setTitle(event.target.value)}
    const onContentChange=(event)=>{setContent(event.target.value)}
    
    const onCreatePost=()=>{
        let postRef = db.collection('posts')
        let payload = {title,content}
        postRef.add(payload).then(
            function(doc){
                console.log("erfef")
                console.log("document successfully written!",doc.id)
            }
        )
        
    }
    return(
        <div className="create_post_container">
            <div className="page_header_conatainer">
                <PageHeader
                style={{
                    margin:'16px',
                    fontSize:'16px',
                }}
                title={'Create Post'}
                />
            </div>
            <div className="post_container">
                
            <div className="post_content_container">
                <PageHeader
                    style={{
                        margin:'6px',
                    }}
                    title={'Post'}
                    extra={<Link to="/">Back</Link>}
                />
                    <Input placeholder="Basic usage" value={title} onChange={onTitleChange}/>
                </div>
                <div className="post_content_container">
                    <PageHeader
                    style={{
                        margin:'16px',
                    }}
                    title={'Create Post'}
                    />
                    <TextArea rows={4} showCount maxLength={100} id="post_content"
                    style={{
                        margin:"16px",
                    }}
                    onChange={onContentChange}
                    value={content}
                    />
                </div>
                <div className="post_submit_button">
                <Button margin="16px" onClick={onCreatePost} >Primary Button</Button>
                </div>
            </div>
        </div>
    )
}
export default CreatePost;