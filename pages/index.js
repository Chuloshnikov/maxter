import UsernameForm from "@/components/UsernameForm";
import { useSession } from "next-auth/react";
import useUserInfo from "@/hooks/useUserInfo";
import PostForm from "@/components/PostForm";
import { useEffect, useState } from "react";
import axios from "axios";
import PostContent from "@/components/PostContent";




export default function Home() {
  const {userInfo, status: userInfoStatus} = useUserInfo();
  const [posts, setPosts] = useState([]);

  function fetchHomePosts() {
    axios.get('/api/posts').then(posts => {
      setPosts(posts);
    });
  }

  useEffect(() => {
    fetchHomePosts();
  }, [])

  if (userInfoStatus === 'loading') {
    return 'loading user info';
  }

  if (!userInfo?.username) {
    return <UsernameForm/>;
  }

  return (
      <div className="max-w-lg mx-auto border-r border-l border-gray-300 min-h-screen">
        <h1 className="text-lg font-bold">Home</h1>
        <PostForm onPost={() => {fetchHomePosts()}}/>
        <div className="">
          {posts.length > 0 && posts.map(post => (
            <div className="border-t border-gray-300 p-5">
             <PostContent {...post}/>
            </div>
          ))}
        </div>
      </div>
  )
}
