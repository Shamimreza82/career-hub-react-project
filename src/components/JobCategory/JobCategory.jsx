import React from 'react';

const JobCategory = ({jobCate}) => {
    const {logo, category_name, availability} = jobCate; 
    console.log (jobCate)
    return (
        <div className=' h-[243px] bg-slate-100 p-3 rounded-lg '>
            <div className='flex justify-center mb-5 mt-5'>
                <img className='p-4 bg-slate-200 rounded-md' src={logo} alt="" />
            </div>
            <h2 className='text-lg font-bold'>{category_name}</h2>
            <h3 className=' font-bold text-gray-500 '>{availability}</h3>
        </div>
    );
};

export default JobCategory;