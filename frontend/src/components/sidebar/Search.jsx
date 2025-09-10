import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='pt-[0.5rem] h-[5%] flex items-center gap-[.3rem]' style={{ fontSize: 'var(--size-medium)' }}>
      <CiSearch className='react-icon' />
      <input type='text' placeholder='Search' className='min-w-0 outline-none' />
    </div>
  )
}

export default Search
