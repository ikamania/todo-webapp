import Sidebar from './sidebar/Sidebar.jsx'
import Tasklist from './tasklist/Tasklist.jsx'
import Taskform from './taskform/Taskform.jsx'

function Layout() {
    return (
        <div className='w-screen h-screen p-[5rem] bg-[var(--color-bg)]'>
            <div className='w-full h-full bg-[var(--color-container)] rounded-[1rem] flex flex-row p-[0.5rem]'>
                <Sidebar />
                <Tasklist />
                <Taskform />
            </div>
        </div>
    )
}

export default Layout
