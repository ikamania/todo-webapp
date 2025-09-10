import { CiMenuBurger } from "react-icons/ci";

const Menu = () => {
    return (
        <div className='w-full h-[5%] flex flex-row justify-between items-center select-none font-bold' style={{fontSize: 'var(--size-large)'}}>
            <p className='text-gray-700'>Menu</p>
            <CiMenuBurger className='react-icon'/>
        </div>
    )
}

export default Menu 
