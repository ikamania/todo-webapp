import SidebarItem from "./SidebarItem.jsx";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";

const Settings = () => {
    return (
        <div className='section-list !pl-0 mt-auto text-gray-600' style={{fontSize: 'var(--size-small)'}}>
            <SidebarItem name={'Settings'} Icon={GiSettingsKnobs}/>
            <SidebarItem name={'Sign Out'} Icon={FaSignOutAlt} />
        </div>
    )
}

export default Settings;
