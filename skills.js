import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function calculateNumbers(var1, var2)
{
    return var1 + var2;
}
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
