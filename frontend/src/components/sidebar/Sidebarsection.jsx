import SidebarItem from "./SidebarItem.jsx";

const Sidebarsection = ({children, name}) => {
    return (
        <div className="section">
            <p className="section-title">{name}</p>
            <div className='section-list'>
                {children}
            </div>
        </div>
    )
}

export default Sidebarsection;
