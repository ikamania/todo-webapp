import Header from './Header.jsx'
import Taskdescription from './Taskdescription.jsx'
import Taskinfo from './Taskinfo.jsx'
import Tagbox from '../sidebar/Tagbox.jsx'

const Lists = () => {
  return (
    <select className='info-border'>
      <option value="">Personal</option>
      <option value="">Work</option>
    </select>
  )
}

const Date = () => {
  return (
    <input type="date" name="date" value='2018-07-22' className='info-border' />
  )
}

const Taskform = () => {
  return (
    <div className='h-full w-[30%] bg-[var(--color-box)] rounded-[1rem] p-[1rem] flex flex-col gap-[.6rem]'>
      <Header />
      <Taskdescription name={'task'} placeholder={'Wash the dishes'} height={'6%'} />
      <Taskdescription name={'description'} placeholder={'Descripiton'} height={'20%'} style={'flex flex-wrap'} />
      <Taskinfo name={'List'} children={<Lists />} />
      <Taskinfo name={'Due date'} children={<Date />} />
      <Taskinfo name={'Tags'}>
        <Tagbox name='Tag 1' />
        <Tagbox name='+ add Tag' />
      </Taskinfo>
    </div >
  )
}

export default Taskform
