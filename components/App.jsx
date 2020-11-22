import React from 'react'
import Posts from './Posts'
import Post from './post'
import {Router}from "@reach/router";
import CreatePost from './createPost';
function App(){
    return (
        <div className="app_container">
            <Router>
            <Posts default/>
            <Post path="post/:id" />
            <CreatePost path="create_post"/>
            </Router>
        </div>
    )
}
export default App;