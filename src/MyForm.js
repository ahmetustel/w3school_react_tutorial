import { useState } from "react"

const MyForm = () => {

    const [myCar, setMyCar] = useState('Volvo');

    const handleChange = (e)=>{
        setMyCar(e.target.value);
    }

    return (
        <form>
           <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
           </select> 
        </form>
    )
}

export default MyForm