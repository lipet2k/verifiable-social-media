import Layout from "@/components/layout";
import MessagePost from "@/components/message-post";
import { ReactElement, useEffect, useState } from 'react';

export default function Explore() {

    const [posts, setPosts] = useState([{
        user_name: "test1",
        text: "test1"
    }, {
        user_name: "test2",
        text: "test2"
    }]);

    //Message to be posted
    const [message, setMessage] = useState("");

    const handleOnChange = (e: any) => {
        e.preventDefault();
        setMessage(e.target.value);
        console.log(e.target.value);
    }

    const postMessage = async (e: any) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/post");
    }

    useEffect(() => {

    }, []);
    return (
        <div className="min-h-screen flex justify-center bg-black">
            <div className="flex flex-col mt-20">
                <div className="flex flex-col w-[20rem] lg:w-[50rem] h-[10rem] rounded-lg bg-white mb-[2rem] p-2">
                    <input placeholder="Say something to the world!" className="pl-2 w-[19rem] lg:w-[49rem] h-[8rem] mb-[0.5rem]" onChange={handleOnChange}></input>
                    <div className="flex justify-end">
                        <button className="p-2 hover:bg-white bg-black rounded-lg hover:shadow border border-black items-end w-20 text-white hover:text-black border hover:border-dotted hover:underline" onClick={postMessage}>Post</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-[2rem]">
                    {posts.map((post: any, index: number) => (
                        <MessagePost user_name={post.user_name} text={post.text} />
                    ))}
                </div>
            </div>

        </div>
    );
}

Explore.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

