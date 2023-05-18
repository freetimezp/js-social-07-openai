"use client";
import { AppContext } from '@/app/context/IsPlayingContext';
import { sendTextToOpenAI } from '@/utils/sendTextToOpenAI';
import React, { FormEvent, useState, useContext } from 'react';

export const TextToSpeech = () => {
    const [userText, setUserText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { isPlaying, setIsPlaying } = useContext(AppContext);

    const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    const voices = synth?.getVoices();
    //console.log(voices);

    const selectedVoices = voices?.find((voice) => voice.name === "Microsoft Zira - English (United States)");
    //console.log(selectedVoices);

    const speak = (textToSpeak: string) => {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.voice = selectedVoices!;
        utterance.rate = 0.5;

        synth?.speak(utterance);
        setIsLoading(true);

        setIsPlaying(true);

        utterance.onend = () => {
            setIsLoading(false);
            setIsPlaying(false);
        }
    };

    const handleUserText = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        //console.log(userText);

        try {
            const message = await sendTextToOpenAI(userText);
            speak(message);
        } catch (error) {
            let message = "";
            if (error instanceof Error) {
                message = error.message;
            }
            //console.log(message);
        } finally {
            setIsLoading(false);
            setUserText("");
        };
    };

    return (
        <div className='relative top-0 z-50'>
            <form
                className='absolute -top-[120px] left-[10px] space-x-2 pt-2'
                onSubmit={handleUserText}
            >
                <input
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    className='bg-transparent sm:w-[550px] w-[290px] border border-[#b00c3f]/80 outline-none rounded-lg
                        placeholder:text-[#b00c3f] p-2 text-[#b00c3f]'
                    placeholder='What do you want to know human?...'
                    type="text"
                />
                <button
                    className='text-[#b00c3f] py-2 px-4 border border-[#b00c3f] rounded-lg disabled:text-blue-100
                    disabled:cursor-not-allowed disabled:bg-gray hover:text-black hover:bg-[#b00c3f]
                    duration-300 transition-all'
                    disabled={isLoading}
                >
                    {isLoading ? "Thinking" : "Ask"}
                </button>
            </form>
        </div>
    );
}
