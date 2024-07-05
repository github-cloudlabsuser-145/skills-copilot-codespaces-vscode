/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleInputChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default MarkdownEditor;


// take a sentence as input
const sentence = "javascript";
// reverse the input sentence
const reversedSentence = sentence.split('').reverse().join('');
// the start of the sentence must start with a capital
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence); // Output: "Tpircsavaj"
// Map through an array of arrays of objects
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
    ],
    [
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 40 },
    ],
];

const names = data.flatMap((array) => array.map((obj) => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']