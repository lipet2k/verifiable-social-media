import React, { ReactElement } from 'react';
import Layout from '@/components/layout';

export default function Profile() {
    return (
        <div className="flex justify-center items-center">
            Home
        </div>
    )
}

Profile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}