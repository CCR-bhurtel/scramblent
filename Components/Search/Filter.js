import React, { useState } from 'react';
import FilterItem from './FilterItem';

function Filter({ options, onChange, onOptionClear }) {
    const { startsWith, endsWith, length, contains } = options;

    return (
        <div className="filterWrapper w-100 flex items-center justify-center ">
            <div className="flex items-center flex-col p-[1rem] rounded-md bg-white mt-[1rem] ">
                <div className="firstRow flex flex-col items-center justify-center md:flex-row md:gap-2">
                    <FilterItem
                        name={'startsWith'}
                        placeholder={'Starts With'}
                        onChange={onChange}
                        onClear={onOptionClear}
                        value={startsWith}
                    />
                    <FilterItem
                        name={'endsWith'}
                        placeholder={'Ends with'}
                        onChange={onChange}
                        onClear={onOptionClear}
                        value={endsWith}
                    />
                </div>
                <div className="secondRow flex mt-2 flex-col items-center justify-center md:flex-row md:gap-2">
                    <FilterItem
                        name={'length'}
                        placeholder={'Length'}
                        onChange={onChange}
                        onClear={onOptionClear}
                        value={length}
                        type="number"
                    />
                    <FilterItem
                        name={'contains'}
                        placeholder={'Contains'}
                        onChange={onChange}
                        onClear={onOptionClear}
                        value={contains}
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;
