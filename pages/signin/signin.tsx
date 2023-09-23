import Layout from '@/components/layout';
import { ReactElement } from 'react';

export default function SignIn() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <h1 className="text-white">Sign In</h1>
        </div>
    )
}

SignIn.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}