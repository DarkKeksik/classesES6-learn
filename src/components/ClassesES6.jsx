import React, { useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript'

const ClassesES6 = () => {

    const initStateCode = `
class Animal {
    static type = "ANIMAL";
    
    constructor(options) {
        this.name = options.name;
        this.age = options.age
        this.hasTail = options.hasTail
    }
    
    voice() {
        console.log("I am this.name")
    }
}

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    
    get ageInfo() {
        return this.age * 7
    }
    set ageInfo(newAge) {
        this.age = newAge
    }
} 
    `;
    // Сюда код
    const [code, setCode] = useState(initStateCode.trim());

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
