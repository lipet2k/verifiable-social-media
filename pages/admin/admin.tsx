import User from '@/components/user';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '@/components/layout';

export default function Admin() {
    
    const [users, setUsers] = useState([{user_name: 'Peter', posts: ["hello", "memes"]}]);

    return (
        <div className="min-h-screen flex justify-center bg-black">
            <div className="flex flex-col mt-20">
                <div className="flex flex-col space-y-[2rem]">
                    {users.map((user: any, index: number) => (
                        <div key={index}>
                            <User user_name={user.user_name} posts={user.posts}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

Admin.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

