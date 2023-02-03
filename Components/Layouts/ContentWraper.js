import React from 'react';

function ContentWraper(props) {
    return (
        <div className="wraper w-100 flex items-center justify-center">
            <div className="content max-w-[300px] lsm:max-w-[350px] md:max-w-[740px]">{props.children}</div>
        </div>
    );
}

export default ContentWraper;
