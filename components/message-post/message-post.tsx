import Image from 'next/image';

export default function MessagePost({ user_name, text }: { user_name: string, text: string }) {
    return (
        <div className="w-[20rem] lg:w-[50rem] h-[5rem] flex flex-col bg-white rounded-lg">
            <div className="flex ml-2 mt-2">
            <Image src="/bored_ape.jpeg" alt="y-logo" width={40} height={35} className="mr-2 rounded-3xl border border-black border-dotted" />
                <h1 className="text-2xl">{user_name}</h1>
            </div>
            <div className="flex items-center ml-2 mt-2">
                <p className="flex">
                    {text}
                </p>
            </div>
        </div>
    )
}