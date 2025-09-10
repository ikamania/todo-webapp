const Header = ({ title }) => {
  return (
    <div className='flex flex-row items-center w-full h-[10%]'>
      <p className='font-bold text-gray-700 m-0' style={{ fontSize: 'var(--size-extra-large)' }}>{title}</p>
    </div>
  )
}

export default Header
