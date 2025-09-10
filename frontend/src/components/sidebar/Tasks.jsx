import SidebarItem from "./SidebarItem";
import Sidebarsection from "./Sidebarsection";
import { HiChevronDoubleRight } from "react-icons/hi";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiStickyNoteFill } from "react-icons/ri";

const Tasks = () => {
    return (
        <Sidebarsection name={'TASKS'}>
            <SidebarItem name={'Upcoming'} Icon={HiChevronDoubleRight} />
            <SidebarItem name={'Today'} Icon={FaListCheck} />
            <SidebarItem name={'Calendar'} Icon={FaCalendarAlt} />
            <SidebarItem name={'Sticky Wall'} Icon={RiStickyNoteFill} />
        </Sidebarsection>
    )
}


export default Tasks