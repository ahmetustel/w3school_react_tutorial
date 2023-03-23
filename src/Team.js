const Ranks = (props) => {
    return <li>My team is {props.t}</li>
}

const Team = () => {
    const teams = [
        { id: 1, team: "Galatasaray" }, 
        { id: 2, team: "Fenerbahçe" }, 
        { id: 3, team: "Beşiktaş" }, 
        { id: 4, team: "Trabzonspor" }
    ];
    return (<>
        <h1>My team list is below</h1>
        <ul>
            {teams.map((takim) => <Ranks key={takim.id} t={takim.team} /> )}
        </ul>
    </>)
}

export default Team