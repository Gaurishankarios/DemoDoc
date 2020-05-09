import React, {useState} from 'react'


const BlogContext =  React.createContext();

export const BlogProvider = ( { children }) => {

    
    const products = [
        { id: 101, name: 'productFirst', rate: 7000, quality: 20 },
        { id: 102, name: 'productSecond', rate: 10000, quality: 30 },
        { id: 103, name: 'productThird', rate: 8000, quality: 10 },
    ];
    const[blogPosts, setBlogPosts] = useState(products)

    const addBlogPost = (tmp) => {
        setBlogPosts([...blogPosts, tmp]) 
        console.log("data in product is ", tmp);
    }

    const deleteBlog = (tmp) => {
        console.log(tmp);
        const name = tmp.name;
        setBlogPosts(blogPosts.filter(tmp => tmp.name !== name));

    }

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost, deleteBlog: deleteBlog}}>{children}
    </BlogContext.Provider>
}
export default BlogContext;