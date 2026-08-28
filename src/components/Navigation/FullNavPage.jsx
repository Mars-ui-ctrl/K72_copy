import crossmark from '../../assets/Cross_mark.svg'
import { useEffect } from 'react'

const FullNavPage = ({ onClose }) => {
        useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }, []);

        return (
            <div className='h-screen w-full bg-black text-white flex flex-col fixed z-50 inset-0'>
                <header className='absolute right-0 cursor-pointer'>
                    <div onClick={onClose} className='cursor-pointer t-0 p-1'>
                        <img src={crossmark} alt="crossmark" className='w-[8vw]' />
                    </div>
                </header>
                <div className='w-full flex justify-center items-center h-screen '>
                    <nav className='flex text-center'>
                        <ul className='text-[8.55vw] leading-[0.85] tracking-[0%] font-[lausanne-500] '>
                            <li className='border-t-[1px] border-b-[1px] border-[#f2f2f299] w-screen'>
                                <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/projets">
                                    <span>PROJETS</span>
                                </a>
                            </li>
                            <li className='border-b-[1px] border-[#f2f2f299] w-screen'>
                                <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/agence">
                                    <span>AGENCE</span>
                                </a>
                            </li>
                            <li className='border-b-[1px] border-[#f2f2f299] w-screen'>
                                <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/contact">
                                    <span>CONTACT</span>
                                </a>
                            </li>
                            <li className='border-b-[1px] border-[#f2f2f299] w-screen'>
                                <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/blogue">
                                    <span>BLOGUE</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div >
        )
    }

export default FullNavPage