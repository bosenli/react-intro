// function Child(props){
//     //const { firstName } = props.person
//     return (
//         <div>
//             { fisrtName }
//             <h1>{props.person.firstName}</h1>
//         </div>
//     )
// }
// export default Child
//connect grandchild componnets
import GrandChild from './GrandChild'
function Child(props){
    //const { firstName } = props.person
    return (
        <div>
            <GrandChild quote={props.quote}/>
        </div>
    )
}
export default Child
