
import { ReactElement } from 'react';
import Layout from '@/components/layout';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

export default function Error({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black flex-col">
            <div className="flex flex-col items-center justify-center bg-white w-[20rem] h-[24rem] lg:w-[70rem] lg:h-[30rem] rounded-2xl border-4 border-white border-dashed">
                <div className="text-black mb-10 flex items-center justify-center flex-col space-y-8">
                    <h1 className="text-xl lg:text-8xl">Welcome to Checkmate</h1>
                    <p className="text-lg lg:text-2xl bg-red-500 lg:w-[35rem] lg:h-[4rem] w-[15rem] h-[4rem] rounded-md font-bold text-center flex items-center justify-center">Please make sure you have signed in correctly.</p>
                </div>
                {Object.values(providers).map((provider: any) => (
                    <div key={provider.name} className='mb-[2rem]'>
                        <button className="bg-black rounded p-2 lg:w-[18rem] lg:h-[4rem] text-xl lg:text-2xl text-white hover:bg-slate-800 hover:underline" onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    // if (session) {
    //     return { redirect: { destination: '/explore' } }
    // }
    const providers = await getProviders();
    return {
        props: { providers: providers ?? [] }
    }
}

Error.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

