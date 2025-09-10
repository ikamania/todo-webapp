import SidebarItem from './SidebarItem';
import Sidebarsection from './Sidebarsection.jsx';
import { FaPlus } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";


const Lists = () => {
  return (
    <Sidebarsection name={'LISTS'}>
      <SidebarItem name={'Personal'} Icon={FaSquare} color={'red'} />
      <SidebarItem name={'Add New List'} Icon={FaPlus} />
    </Sidebarsection>
  )
}

export default Lists
