import Tagbox from './Tagbox.jsx'

const Tags = () => {
    return (
        <div className='section'>
            <p className='section-title'>TAGS</p>
            <div className='flex flex-wrap gap-[0.4rem] pl-[.5rem]'>
                <Tagbox name={'Tag 1'} />
                <Tagbox name={'Tag 2'} />
                <Tagbox name={'+ Add Tag'} />
            </div>
        </div>
    )
}

export default Tags;
