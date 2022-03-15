// props is object
//render on screen like a model
function Events (props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <h1>Bad Bunny</h1>
            <p>Concert</p>
            {/* jsx is javascript expression   */}
        </div>
    )
}
export default Events;


//render property specifically by descturing 
// function Events ({ title , date }) {
//     return(
//         <div>
//             <h1>{title}</h1>
//              <h1>{date}</h1>
//             <h1>Bad Bunny</h1>
//             <p>Concert</p>
//             {/* jsx is javascript expression   */}
//         </div>
//     )
// }
// export default Events;