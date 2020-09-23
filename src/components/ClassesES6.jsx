import React, { useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript'

const ClassesES6 = () => {

    // Сюда код
    const [code, setCode] = useState(``);

    return (
        <div className="block">
            <h2>ES6</h2>
            <Editor
                placeholder="Type some code…"
                value={code}
                highlight={code => highlight(code, languages.js)}
                onValueChange={code => setCode(code)}
                padding={20}
                className="codePanel"
            />
        </div>
    )
}

export default ClassesES6;