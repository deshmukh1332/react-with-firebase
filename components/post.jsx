import React from 'react';
import {PageHeader,Card} from 'antd';
import 'antd/dist/antd.css';
import {Link}from '@reach/router'

const Post=(props)=>{
    return(
        <div className = "post_container">
            <div className ="page_header_container">
                <PageHeader
                style={{
                    border:'1px solid rgb(173,238,382)',
                    margin:'16px',
                }}
                title="Secondary Post"
                />
            </div>
            <div className="page_content_container">
                <Card
                    style={{ margin: 16 }}
                    type="inner"
                    title="Inner Card title"
                    extra={<Link to="/">More</Link>}
                    >
                    Inner Card content
                </Card>
            </div>
        </div>
    )
}
export default Post;