import { getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router";

export default function LoginPage({providers}) {
    const {data, status} = useSession();
    const router = useRouter();
    if (status === 'loading') {
        return '';
    }
    if (data) {
        router.push('/');
    }
    return (
        <div className="flex items-center justify-center h-screen">
            {Object.values(providers).map(provider => (
                <div key={provider.id}>
                    <button 
                    onClick={async () => {await signIn(provider.id)}}
                    className="bg-twitterBlue px-5 py-2 text-black 
                    rounded-full text-white hover:scale-105 
                    duration-300 flex items-center gap-1">
                        <img src="/google.png" alt="google" className="h-4"/>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {providers},
    }
}