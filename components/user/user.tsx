import Image from 'next/image';
import Post from '@/components/message-post';

export default function User({ user_name, posts }: { user_name: string, posts: string[] }) {

    function ban_user() {
        
    }

    return (
        <div className="w-[20rem] lg:w-[50rem] flex flex-col bg-white rounded-lg">
            <div className="flex ml-2 mt-2 mb-4">
                <h1 className="text-4xl">{user_name}</h1>
            </div>

            <div className="flex flex-col space-y-4">
                {posts.map((post: string, index: number) => (
                    <div key={index}>
                        <Post user_name={user_name} text={post} />
                    </div>
                ))}
            </div>


        </div>
    )
}