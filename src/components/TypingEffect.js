import React, { useEffect, useState } from 'react';

const TypingEffect = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setText(words[index].slice(0, text.length + 1));
            if (text === words[index]) {
                setTimeout(() => setText(''), 1000); // Clear text before moving to the next word
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }, 200);
        return () => clearInterval(interval);
    }, [text, index, words]);

    return <span>{text}</span>;
};

export default TypingEffect;
