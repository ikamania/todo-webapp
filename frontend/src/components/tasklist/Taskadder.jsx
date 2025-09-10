import { FaPlus } from "react-icons/fa";

const Taskadder = () => {
  return (
    <div className='flex h-[8%] items-center gap-[0.5rem] pl-[1rem] border border-gray-200 rounded-[1rem]' style={{ fontSize: 'var(--size-medium)' }}>
      <FaPlus className='react-icon mb-[.2rem]' />
      <input type='text' placeholder='Add New Task' className='min-w-0 outline-none' />
    </div>
  )
}

export default Taskadder 
