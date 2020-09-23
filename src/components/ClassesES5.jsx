import React, {useState} from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';



const ClassesES5 = () => {

    const [code, setCode] = useState(`
var Animal = function( options ) {
    this.name = options.name;
    this.vote = options.vote;
    this.tail = options.tail;
};

Animal.prototype.vote = function() {
    console.log(this.name + " say "+ this.vote);
}

var dog = new Animal({name: "Бобик", vote: "гав", tail: true});
    `);


    return (
        <div className="block">
            <h2>ES5</h2>

            <Editor
                placeholder="Type some code…"
                value={code.trim()}
                highlight={code => highlight(code, languages.js)}
                onValueChange={code => setCode(code)}
                padding={20}
                className="codePanel"
            />
        </div>
    )
}

export default ClassesES5;