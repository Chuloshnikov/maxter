import UsernameForm from "@/components/UsernameForm";
import { useSession } from "next-auth/react";
import useUserInfo from "@/hooks/useUserInfo";
import PostForm from "@/components/PostForm";




export default function Home() {
  const {data:session, status} = useSession();
  const {userInfo, status: userInfoStatus} = useUserInfo();

  if (userInfoStatus === 'loading') {
    return 'loading user info';
  }

  if (!userInfo?.username) {
    return <UsernameForm/>;
  }

  return (
      <div className="max-w-lg mx-auto border-r border-l border-gray-300 min-h-screen">
        <h1 className="text-lg font-bold">Home</h1>
        <PostForm/>
      </div>
  )
}
