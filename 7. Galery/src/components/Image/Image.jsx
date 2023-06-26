import './image.css';
const Image = (props)=>{
    
    return(
        <img src={props.img} alt="" key={props.y} onClick={()=>props.setImgSeleccionado(props.img)} className='img'/>
    )
}
export default Image;