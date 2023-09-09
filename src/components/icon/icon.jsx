import { FaPenAlt, FaRegCircle, FaTimes } from 'react-icons/fa';
function icons({name}){
    if(name =='circule'){
        return <FaRegCircle/>
    }
    else if(name=='cross'){
        return <FaTimes/>
    }
    else{
        return <FaPenAlt/>
    }
}
export default icons;