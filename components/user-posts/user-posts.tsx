import Post from '@/components/message-post'

export default function UserPosts({ user_name, posts}: { user_name: string, posts: string[]}) {
    return (
        <div className="w-[20rem] lg:w-[50rem] flex flex-col bg-white rounded-lg">

            <div className="flex flex-col space-y-4">
                {posts.map((post: string, index: number) => (
                    <div key={index}>
                        <Post user_name={user_name} text={post} />
                    </div>
                ))}
            </div>


        </div>
    );
}