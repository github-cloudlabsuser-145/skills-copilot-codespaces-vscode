
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Run the following command in your terminal   
// npm install react react-dom next react-markdown

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    const reverseSentence = (sentence) => {
        const words = sentence.split(' ');
        const reversedWords = words.map((word) => {
            return word.split('').reverse().join('');
        });
        const reversedSentence = reversedWords.join(' ');
        return reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    };

    const data = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Smith', age: 30 },
        { name: 'Bob Johnson', age: 35 }
    ];

    const names = data.map((item) => item.name);

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{reverseSentence(markdown)}</ReactMarkdown>
        </div>
    );
};

const data = [
    [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Smith', age: 30 },
        { name: 'Bob Johnson', age: 35 }
    ],
    [
        { name: 'Alice Brown', age: 40 },
        { name: 'Eve Davis', age: 45 },
        { name: 'Charlie Green', age: 50 }
    ]
];

const names = data.flatMap((array) => array.map((item) => item.name));

console.log(names); // Output: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Eve Davis', 'Charlie Green']


export default MarkdownEditor;


