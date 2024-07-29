"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        return (
          <PromptCard
            key={post.id}
            post={post}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = async (text) => {
    setSearchText(text);

    const res = await fetch(
      text === "" ? `/api/prompt` : `/api/prompt/search/${text}`
    );
    const data = await res.json();
    setPosts(data);
    console.log(data);
  };
  const handleTagClick = (tag) => {
    handleSearchChange(tag);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/prompt`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
    setInterval(fetchPosts, 10000);
  }, []);
  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or username"
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
