import Image from 'next/image';
import Post from '@/components/message-post';

export default function User({ score, user_name, posts }: { score: number, user_name: string, posts: string[] }) {

    function ban_user() {

    }

    return (
        <div className="w-[20rem] lg:w-[50rem] flex flex-col bg-white rounded-lg">
            <div className="flex ml-2 mt-2 mb-4 mr-2 justify-between">
                <h1 className="text-4xl">{user_name}</h1>
                <div className="flex items-center flex-col lg:flex-row">
                    <h1 className="text-lg lg:text-2xl text-red-500 font-bold lg:mr-6 lg:mb-0 mb-3">Bot Rating {score}</h1>
                    <button className="bg-red-800 p-2 rounded-lg font-bold border border-red-800 text-white hover:bg-red-500">Ban User</button>
                </div>
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