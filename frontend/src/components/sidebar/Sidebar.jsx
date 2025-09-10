import Menu from './Menu.jsx'
import Search from './Search.jsx'
import Tasks from './Tasks.jsx'
import Lists from './Lists.jsx'
import Tags from './Tags.jsx'
import Settings from './Settings.jsx'

const Sidebar = () => {
    return (
        <div className='h-full w-[25%] bg-[var(--color-box)] rounded-[1rem] p-[1rem]'>
            <Menu />
            <div className='flex flex-col h-[95%] pl-[.3rem]'>
                <Search />
                <Tasks />
                <Lists />
                <Tags />
                <Settings />
            </div>
        </div>
    )
}

export default Sidebar
