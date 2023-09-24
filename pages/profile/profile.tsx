import React, { ReactElement } from 'react';
import Layout from '@/components/layout';
import UserPosts from '@/components/user-posts';
import Image from 'next/image';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Profile({ profile }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="min-h-screen flex justify-center bg-black">
            <div className="flex flex-col mt-20">

                <div className="flex flex-col w-[20rem] lg:w-[50rem] h-[18rem] lg:h-[11rem] rounded-lg bg-white mb-[2rem] p-2">
                    <div className="lg:flex-row space-x-4 items-center justify-center flex flex-col">
                        <Image src="/bored_ape.jpeg" alt="y-logo" width={200} height={200} className="rounded-xl"/>
                        <div>
                            <h1 className="text-2xl lg:text-4xl">{profile.user_name}</h1>
                            <p className="text-md lg:text-xl">Hello! I could be Satoshi Nakamoto. I also could be Oscar the Grouch. Who knows?</p>
                        </div>
                    </div>
                </div>
                <UserPosts user_name={profile.user_name} posts={profile.posts} />
            </div>

        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            profile: {
                user_name: "Peter",
                posts: ["test", "test2"]
            }
        }
    }
}

Profile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}