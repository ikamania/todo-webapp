const Taskinfo = ({ name, children }) => {
  return (
    <div className='w-full flex flex-wrap gap-[.5rem] items-center mt-[.2rem]' style={{ fontSize: 'var(--size-small)' }}>
      <p className='w-[20%] text-gray-700'>{name}</p>
      {children}
    </div>
  )
}

export default Taskinfo
