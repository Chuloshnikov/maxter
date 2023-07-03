import React, { useState, useEffect } from 'react';
import useUserInfo from "../hooks/useUserInfo";
import { useRouter } from 'next/router';

const UsernameForm = () => {

    const {userInfo, status} = useUserInfo();
    const [username, setUsername] = useState();
    const router = useRouter();
    console.log(userInfo.email)

    useEffect(() => {
        if (status === 'loading') {
            return;
        }
        if (username === '') {
            const defaultUsername = userInfo?.email.split('@')[0];
            setUsername(defaultUsername.replace(/[^a-z]+/gi,''));
        }
    }, [status])
    

    async function handleFormSubmit(e) {
        e.preventDefault();
        await fetch(`/api/users`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({username}),
        });
        router.reload();
    }

    if (status === 'loading') {
        return '';
    }

  return (
    <div className='flex h-screen items-center justify-center'>
        <form className='text-center' onSubmit={handleFormSubmit}> 
            <h1 className='text-xl mb-2'>Pick a username</h1>  
            <input 
            onChange={e => setUsername(e.target.value)}
            className='border-2 block mb-1 px-3 py-1 rounded-full' 
            type="text" 
            placeholder={'username'} 
            value={username}
            />  
            <button className='block bg-twitterBlue text-white w-full rounded-full py-1'>Continue</button>
        </form>
    </div>
  )
}

export default UsernameForm;