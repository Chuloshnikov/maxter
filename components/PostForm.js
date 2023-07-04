import useUserInfo from '@/hooks/useUserInfo';
import { useState } from 'react';
import axios from 'axios';

const PostForm = () => {

    const {userInfo, status: userInfoStatus} = useUserInfo();
    const [text, setText] = useState('');

    async function handlePostSubmit(e) {
        e.preventDefault();
        await axios.post('/api/posts', {text})
        setText('');
    }

    if (userInfoStatus === 'loading') {
        return '';
    }

  return (
    <form className="mx-5" onSubmit={handlePostSubmit}>
    <div className="flex">
      <div className=" ">
        <div className="rounded-full overflow-hidden w-12">
          <img src={userInfo?.image} alt="avatar"/>
        </div>
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