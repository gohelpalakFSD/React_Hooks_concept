import { memo } from "react";



function ChildA({Learning, color}){
    console.log("Child Component"+color);
    return(
        <>
        </>
    )
}

export default memo(ChildA);