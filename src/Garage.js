import Car from './Car'

function Garage(){
    return(
        <>
            <h1>Who lives in my garage?</h1>

            {/* Child'e iletilecek "prop" böyle iletilir */}
            <Car color={'red'}/> 
        </>
    )
}

export default Garage