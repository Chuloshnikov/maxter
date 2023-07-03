import UsernameForm from "@/components/UsernameForm";
import { useSession } from "next-auth/react";
import useUserInfo from "@/hooks/useUserInfo";




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
    <>
      <div>
        Home page logged in {userInfo.username}
      </div>
    </>
  )
}
