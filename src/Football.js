const shoot = (a,b)=>{
    console.log(a, b._reactName);
};

const Football = ()=>{
return(
    // EVENT sadece tetikliyor, fonksiyon kendine gelen argument'ı kullanıyor
    <button onClick={ (e)=>{shoot('Bu event bir --> ', e)} } >Şut çek bakalım</button>
)
}

export default Football;