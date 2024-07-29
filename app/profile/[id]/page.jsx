"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const ProfilePage = ({ params }) => {
  const [posts, setPosts] = useState([]);

  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  useEffect(() => {
    const fetchPosts = async () => {
      console.log(params.id);
      const res2 = await fetch(`/api/users/${params.id}/posts`);
      const data = await res2.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Profile
      name={username}
      desc={`Welcome to ${username} profile page`}
      data={posts}
    />
  );
};

export default ProfilePage;
