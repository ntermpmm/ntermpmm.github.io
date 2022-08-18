import React from "react";
import "react-simple-typewriter/dist/index";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function Typewriters({ className }) {
    const words = ["DevCats", "Full-Stack", "Mobile App", "Website"];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });

    return (
        <span className={className}>
            {text}
            <Cursor />
        </span>
    );
}

export default Typewriters;
