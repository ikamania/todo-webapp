const Tagbox = ({ name }) => {
  return (
    <div className='h-[2rem] bg-gray-300 rounded-[.5rem] inline-flex items-center justify-center pl-2 pr-2 select-none cursor-pointer'>
      <p style={{ fontSize: 'var(--size-smaller)' }}>{name}</p>
    </div>
  )
}

export default Tagbox;
