"use client";
import React, { FormEvent, useState } from 'react';

const TextToSpeech = () => {
    const [userText, setUserText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleUserText = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(userText);
    };

    return (
        <div className='relative top-0 z-50'>
            <form
                className='absolute top-[800px] left-[30px] space-x-2 pt-2'
                onSubmit={handleUserText}
            >
                <input
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    className='bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg
                        placeholder:text-[#b00c3f] p-2 text-[#b00c3f]'
                    placeholder='What do you want to know human?...'
                    type="text"
                />
                <button
                    className='text-[#b00c3f] py-2 px-4 border border-[#b00c3f] rounded-lg disabled:text-blue-100
                    disabled:cursor-not-allowed disabled:bg-gray hover:text-black hover:bg-[#b00c3f]
                    duration-300 transition-all'
                >
                    Ask
                </button>
            </form>
        </div>
    );
}

export default TextToSpeech;
