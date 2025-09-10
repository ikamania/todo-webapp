const SidebarItem = ({name, Icon, color}) => {
    return (
        <div className="flex items-center gap-[0.6rem] cursor-pointer">
            <Icon className='react-icon' color={color || 'gray'} />
            <p className='whitespace-nowrap'>{name}</p>
        </div>
    )
}

export default SidebarItem
