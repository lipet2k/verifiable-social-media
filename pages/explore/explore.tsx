import Layout from "@/components/layout";
import MessagePost from "@/components/message-post";
import { ReactElement, useEffect, useState } from 'react';
import { ethers } from "ethers";

export default function Explore() {

    const polygon_address = "0x8dbA78f88AE02Cc2F2A86E170Bb6346d73263D41";

    const abi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "author",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                }
            ],
            "name": "PostCreated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_content",
                    "type": "string"
                }
            ],
            "name": "createPost",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user_address",
                    "type": "address"
                }
            ],
            "name": "getPosts",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "author",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "content",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct SocialMedia.Post[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

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

        const alchemy_provider = new ethers.AlchemyProvider(
            "matic-mumbai",
            process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
        );

        const userWallet = new ethers.Wallet(
            process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
            alchemy_provider
          );

        const contract = new ethers.Contract(polygon_address, abi, userWallet);

        await contract.createPost(message);
    }

    useEffect(() => {
        // async function get_posts() {
        //     const alchemy_provider = new ethers.AlchemyProvider(
        //         "matic-mumbai",
        //         process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
        //     );

        //     const contract = new ethers.Contract(polygon_address, abi, alchemy_provider);

        //     const posts = await contract.getPosts("0xA05a04333D33225D6383583333Ed82d93716270C");
        //     setPosts(posts);
        // }
        // get_posts();

    }, [])
    return (
        <div className="min-h-screen flex justify-center bg-black">
            <div className="flex flex-col mt-20">
                <div className="flex flex-col w-[20rem] lg:w-[50rem] h-[10rem] rounded-lg bg-white mb-[2rem] p-2">
                    <textarea placeholder="Say something to the world!" className="pl-2 w-[19rem] lg:w-[49rem] h-[8rem] mb-[0.5rem] outline-0 resize-none" onChange={handleOnChange}></textarea>
                    <div className="flex justify-end">
                        <button className="p-2 hover:bg-white bg-black rounded-lg hover:shadow border border-black items-end w-20 text-white hover:text-black border hover:border-dotted hover:underline" onClick={postMessage}>Post</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-[2rem]">
                    {posts.map((post: any, index: number) => (
                        <div key={index}>
                            <MessagePost user_name={post.user_name} text={post.text} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

Explore.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

