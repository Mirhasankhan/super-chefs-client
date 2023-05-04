import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-gray-400 w-1/2 p-3 mt-3 ml-3 rounded-md text-white'>
                <h3 className='font-medium mb-2'>Q1. What are the differences between uncontrolled and controlled components?</h3>
                <p>Answer: Controlled components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='bg-gray-400 w-1/2 p-3 mt-3 ml-3 rounded-md text-white'>
                <h3 className='font-medium mb-2'>Q2. How to validate React props using PropTypes?</h3>
                <p>Answer: Import PropTypes from 'prop-types', Then used the props at component ends and starts with the name of the component.</p>
            </div>
            <div className='bg-gray-400 w-1/2 p-3 mt-3 ml-3 rounded-md text-white'>
                <h3 className='font-medium mb-2'>Q3. What is the difference between nodejs and express js?</h3>
                <p>Answer: Express is a minimal and flexible node. js web application framework, Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. </p>
            </div>
            <div className='bg-gray-400 w-1/2 p-3 mt-3 ml-3 rounded-md text-white'>
                <h3 className='font-medium mb-2'>Q4. What is a custom hook, and why will you create a custom hook?</h3>
                <p>Answer: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. Custom hooks offer reusability, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</p>
            </div>
        </div>
    );
};

export default Blog;