import Header from './Header.jsx'
import Taskadder from './Taskadder.jsx'
import Task from './Task.jsx'

const Tasklist = () => {
  return (
    <div className='h-full w-[45%] pl-[2rem] pr-[2rem]'>
      <Header title='Today' />

      <div className='h-[100%] pl-[1rem] gap-[.7rem]'>
        <Taskadder />
        <Task text={'Research content ideas'} />
        <Task text={'Create a database of guests'} />
        <Task text={'Renew drivers licence'} />
      </div>
    </div>
  )
}

export default Tasklist
