const Taskdescription = ({ name, placeholder, height }) => {
  return (
    <div className='w-full border border-gray-200 rounded-[1rem] px-[1rem] pt-[.5rem]' style={{ height }}>
      <textarea type='text' name={name} placeholder={placeholder} className='w-full h-full outline-none flex-1 resize-none' />
    </div >
  )
}

export default Taskdescription

