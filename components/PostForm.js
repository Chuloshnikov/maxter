import useUserInfo from '@/hooks/useUserInfo';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import axios from 'axios';
import Avatar from './Avatar';

const PostForm = ({onPost}) => {
    const {data:session, status} = useSession();
    const {userInfo, status: userInfoStatus} = useUserInfo();
    const [text, setText] = useState('');

    async function handlePostSubmit(e) {
        e.preventDefault();
        await axios.post('/api/posts', {text})
        setText('');
        if(onPost) {
            onPost();
        }
    }

    if (userInfoStatus === 'loading') {
        return '';
    }

  return (
    <form className="mx-5" onSubmit={handlePostSubmit}>
    <div className="flex">
      <div className=" ">
        <Avatar src={userInfo?.image} />
      </div>
      <div className="grow pl-2">
        <textarea 
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full border border-gray-300 p-2" 
        placeholder={'What\'s happening?'}
        />
        <div className="text-right border-t border-gray-300 pt-1">
          <button className="bg-twitterBlue text-white px-4 py-2 rounded-full" type="submit">Tweet</button>
        </div>
      </div>
    </div>
  </form>
  )
}

export default PostForm;