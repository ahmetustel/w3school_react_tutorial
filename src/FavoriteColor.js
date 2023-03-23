// useState Hook'u kullanmak için import edilmesi gerekir.
import React, {useState} from "react";

const FavoriteColor = ()=>{

    // state olarak takip edilecek değişken "color" değişkeni.
    // state değişkeninin değerini değiştirecek eylem "setColor" fonksiyonu
    const [color, setColor] = useState('red');

    return (
        <>
            <h1>My Favorite color is {color}!</h1>

            {/* Aşağıda "EVENT" tetiklendiğinde setColor() function'ın çalışmasını ayarladık */}
            <button type="button" onClick={()=> setColor('blue')}>Blue</button>
            <button type="button" onClick={()=> setColor('red')}>Red</button>
            <button type="button" onClick={()=> setColor('pink')}>Pink</button>
            <button type="button" onClick={()=> setColor('green')}>Green</button>
        </>
    )
}

export default FavoriteColor