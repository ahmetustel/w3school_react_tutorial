const MissedGoal = ()=>{
    return <h1>MISSED</h1>
}

const MadeGoal = ()=>{
    return <h1>GOAL!</h1>
}

const Goal = (props)=>{

    return (
        <>
           { props.isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    )
    
}

export default Goal