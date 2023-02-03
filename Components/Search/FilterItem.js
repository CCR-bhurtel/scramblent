import React from 'react';
import Clear from '../IconComponents/Clear';

function FilterItem({ name, placeholder, onChange, onClear, value, type }) {
    return (
        <div className="filterItem relative">
            <input
                className="outline-0 mt-2 border-Cerulean border-[1px] rounded-md h-[3rem] placeholder:text-[0.9rem]  px-2 text-Cerulean"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type || 'text'}
            />
            {value && (
                <div onClick={() => onClear(name)} className="absolute top-[20px] right-[10px]">
                    <Clear />
                </div>
            )}
        </div>
    );
}

export default FilterItem;
