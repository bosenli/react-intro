//functional components
import React from "react"; //newest version do not need this line, it will start from root

// function name has to be same as file name and begin with capital letter and end with extension with js or jsx, and must return something and export
//fragment same as div , div can customize , fragment cant customize
function Button () {
    return (
        <>
        <button>Click me.</button>
        </>
    )
}
export default Button; //default 