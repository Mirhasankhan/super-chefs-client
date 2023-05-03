import React from 'react';

const Food = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-3'>
            <div className='flex flex-col bg-gradient-to-t from-pink-100 to-blue-200 p-4 mt-5 lg:mx-10 mb-3 rounded-md'>
                <p>Healthy food provides the necessary fuel for the body to function optimally. A diet high in processed and fast foods can lead to fatigue, sluggishness, and a lack of energy. Consuming a balanced diet of whole foods can improve energy levels, endurance, and overall physical performance.</p>
                <p className='mt-auto text-blue-600'>Nutritoinst: James Garner</p>
            </div>
            <div className='flex flex-col bg-gradient-to-t from-pink-100 to-blue-200 p-4 mt-5 lg:mx-10 mb-3 rounded-md'>
                <p>A healthy diet can improve digestion and gut health. Eating fiber-rich foods like fruits, vegetables, and whole grains can aid in digestion and reduce the risk of digestive issues such as constipation and bloating.</p>
                <p className='mt-auto text-blue-600'>Nutritoinst: Calvin Hall</p>
            </div>
            <div className='flex flex-col bg-gradient-to-t from-pink-100 to-blue-200 p-4 mt-5 lg:mx-10 mb-3 rounded-md'>
                <p>Healthy food can help manage and prevent chronic conditions like high blood pressure, high cholesterol, and diabetes. Consuming a diet low in saturated and trans fats, and high in fiber and nutrients, can improve blood sugar levels, reduce inflammation, and lower the risk of developing chronic diseases.</p>
                <p className='mt-auto text-blue-600'>Nutritoinst: David Jordan</p>
            </div>
        </div>
    );
};

export default Food;