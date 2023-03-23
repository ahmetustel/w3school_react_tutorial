function Car(prop){
    // Parent'dan gelen "prop" böyle kullanılır.
    return <h2>Hi, I am a {prop.info.name} Car! and my model is {prop.info.model}
</h2>
}

function Allgarage(){

    const carInfo = { name: "Ford", model: "Mustang" };
    return(
        <>
            <h1>Who lives in my garage?</h1>

            {/* Child'e iletilecek "prop" böyle iletilir */}
            <Car info={carInfo}/> 
        </>
    )
}

export default Allgarage