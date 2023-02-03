import React from 'react';

function Clear({ onClick }) {
    return (
        <div
            className="rounded-full flex items-center justify-center h-[15px] w-[15px] cursor-pointer  bg-Keppel"
            onClick={onClick}
        >
            <span className="text-white mt-[-2px] mr-[-2px]" style={{ transform: 'rotate(45deg)' }}>
                +
            </span>
        </div>
    );
}

export default Clear;
