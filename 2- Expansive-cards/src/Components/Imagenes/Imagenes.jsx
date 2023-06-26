const Imagenes = (props)=>{
    const {src} = props;
    console.log(src)
    return(
        <div>
            <img src={src} alt="" />
        </div>
    )
}
export default Imagenes;