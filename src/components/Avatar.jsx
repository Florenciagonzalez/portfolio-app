import avatar from '../assets/avatar.jpeg';

function Avatar() {

    return (
        <>
        <div className="p-2 w-36 h-36 shrink-0">
            <img src={avatar} alt="" className='w-full h-full rounded-full'/>
        </div>
        </>
    );
}

export default Avatar;