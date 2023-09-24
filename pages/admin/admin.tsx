import User from '@/components/user';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Verifier from '@/components/verifier';

export default function Admin() {
    
    const [users, setUsers] = useState([{user_name: 'Peter', posts: ["hello", "memes"], score: 0.7}]);

    return (
        <div className="min-h-screen flex bg-black flex-col items-center">
            <div className="mt-20 mb-10">
                <Verifier />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col space-y-[2rem]">
                    {users.map((user: any, index: number) => (
                        <div key={index}>
                            <User user_name={user.user_name} posts={user.posts} score={user.score}/>
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

