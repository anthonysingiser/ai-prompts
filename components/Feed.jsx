"use client";

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {

    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick()}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(null)
    const [searchedResults, setSearchedResults] = useState([])

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()
       
            setPosts(data)
        }

        fetchPosts()
    }, [])

    const filterPrompts = (searchText) => {
        const regex = new RegExp(searchtext, "i")
        return posts.filter(
            (item) => 
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        )

    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value)

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPropmts(e.target.value)
                setSearchedResults(searchResult)
            }, 500)
        )
    }


    return (
        <section>
            <form className="relative w-full flex-center">
                <input 
                    type="text"
                    placeholder="Search for a tag or prompt"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={() => {}}                
            />
        </section>        
    )
}

export default Feed;