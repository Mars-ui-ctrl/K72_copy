import hamburger from '../../assets/k72-hamburger.svg';

const Navbar = ({ onOpen }) => {
    return (
        <div className='flex justify-between w-full fixed top-0 z-50 overflow-hidden'>
            <div className='p-2'>
                <a href="/">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                        <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </a>
            </div>
            <div onClick={onOpen} className="group relative bg-black h-[3.125rem] w-[15rem] top-0 flex justify-end overflow-hidden cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-[#f0ff7c] before:transition-all before:duration-500 before:ease-in-out hover:before:h-full ">
                <img src={hamburger} className='w-[30%] pr-5 z-40 group-hover:brightness-0 transition-all duration-300' alt="hamburger" />
            </div>
        </div >
    )
}

export default Navbar