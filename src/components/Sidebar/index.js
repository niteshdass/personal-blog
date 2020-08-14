import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.0-9/107119030_2728189067470897_7736036082917537719_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeFDmypm9e8XAXX3E0nmyyePuXBLosExgfG5cEuiwTGB8Wvlgtp7D1t6hnwLpQ2i6uFXCb9QkKxel06i9476f2wA&_nc_ohc=do7Bg11R5KkAX9NB-5z&_nc_ht=scontent.fzyl1-1.fna&oh=a34aa7521733e29f5947b76fb8745621&oe=5F5AE963" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Nitesh Das I am a software developer specialization in Front end developement....:)</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar