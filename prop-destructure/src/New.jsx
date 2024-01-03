import React from 'react'


//without destructuring
// function New() {
//     const arr=["Pooja", "Rani"];
//     const fname= arr[0];
//     const lname= arr[1];


//   return (
//     <div>
//         <h3>Hello</h3>
//         <h4>Displaying without props</h4>
//         <h4>My name is {fname} {lname}</h4>
//     </div>
//   )
// }


//with Destructuring
// function New(props) {  
//   return (
//     <div>
//         <h3>Hello</h3>
//         <h4>Displaying without props but destructuring</h4>
//         <h4>My name is {props.fname} {props.lname}</h4>
//     </div>
//   )
// }


//Props destructuring
const New = (props) => {
    const { fname, lname } = props;
    //also
    //    const New= ({fname,lname})=>{  will work without props word
    //     
    return (
        <div>
            <h3>Hello</h3>
            <h4>Displaying with props destructuring</h4>
            <h4>My name is {fname} {lname}</h4>

        </div>
    )
}

export default New