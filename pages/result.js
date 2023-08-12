import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

const ResultContainer = dynamic(() => import('../Components/Result'), { ssr: false });
function Result() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultContainer />
        </Suspense>
    );
}

export default Result;
