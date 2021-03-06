import './modal.css'

const Modal = ({children, setShow, show}) => {
    return (
        show && (
            <div onClick={()=>setShow(false)} className='modal'>
                <div onClick={(e)=>e.stopPropagation()} className='modal-box'>
                    <span onClick={()=>setShow(false)} className='exit'>&times;</span>
                    {children}
                </div>
            </div>
        )
    )
}

export default Modal
