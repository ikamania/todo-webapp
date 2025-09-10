import { FaArrowRight } from "react-icons/fa";

const Task = ({ text }) => {
  return (
    <div className='flex h-[8%] items-center gap-[0.5rem] pl-[1rem] pr-[1rem] border-b border-gray-200' style={{ fontSize: 'var(--size-small)' }}>
      <input type='checkbox' className='w-[1rem] h-[1rem]' />
      <p>{text}</p>
      <FaArrowRight className='react-icon ml-auto' />
    </div>
  )
}

export default Task
