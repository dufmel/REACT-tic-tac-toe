export default function Boxes(props){
    

    
    return(
        <div
        className="box"
        onClick={()=>props.handleClick(props.id)}>
        {props.isMarked && <span className="mark">{props.player}</span> 
}        </div>
    )
}