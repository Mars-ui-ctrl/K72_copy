import crossmark from '../../assets/Cross_mark.svg'
import { useEffect } from 'react'
import projectsHover1 from '../../assets/projects-hover-1.png'
import projectsHover2 from '../../assets/projects-hover-2.jpg'
import agenceHover1 from '../../assets/agence-hover-1.jpg';
import agenceHover2 from '../../assets/agence-hover-2.jpg';
import contactHover from '../../assets/contact-hover.png';
import blogueHover1 from '../../assets/blogue-hover-1.jpg';
import blogueHover2 from '../../assets/blogue-hover-2.jpg';
const FullNavPage = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className='h-screen w-full bg-black text-white flex flex-col fixed z-50 inset-0'>
            <header className='absolute right-0 cursor-pointer flex justify-between w-full'>
                <div className='p-2'>
                    <a href="/">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </a>
                </div>
                <div onClick={onClose} className='cursor-pointer t-0 p-1'>
                    <img src={crossmark} alt="crossmark" className='w-[8vw]' />
                </div>
            </header>
            <div className='w-full flex justify-center items-center h-screen '>
                <nav className='flex text-center'>

                    <ul className='text-[8.55vw] leading-[0.85] tracking-[0%] font-[lausanne-500] '>

                        <li className='border-t-[1px] border-b-[1px] border-[#f2f2f299] w-screen relative overflow-hidden group'>
                            <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/projets">
                                <span>PROJETS</span>
                            </a>
                            <div className='absolute top-0 left-0 flex items-center  w-full h-full inset-0  hidden group-hover:flex bg-[#f0ff7c] text-black '>
                                <div className='shrink-0 marquee-effect flex items-center'>
                                    <div className='whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={projectsHover1} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT VOIR</span>
                                        <img src={projectsHover2} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT VOIR</span>
                                    </div>
                                    <div className='shrink-0 whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={projectsHover1} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT VOIR</span>
                                        <img src={projectsHover2} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT VOIR</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='border-b-[1px] border-[#f2f2f299] w-screen relative overflow-hidden group'>
                            <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/agence">
                                <span>AGENCE</span>
                            </a>
                            <div className='absolute top-0 left-0 flex items-center  w-full h-full inset-0  hidden group-hover:flex bg-[#f0ff7c] text-black '>
                                <div className='shrink-0 marquee-effect flex items-center'>
                                    <div className='whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={agenceHover1} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT SAVOIR</span>
                                        <img src={agenceHover2} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT SAVOIR</span>
                                    </div>
                                    <div className='shrink-0 whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={agenceHover1} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT SAVOIR</span>
                                        <img src={agenceHover2} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR TOUT SAVOIR</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='border-b-[1px] border-[#f2f2f299] w-screen relative overflow-hidden group'>
                            <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/contact">
                                <span>CONTACT</span>
                            </a>
                            <div className='absolute top-0 left-0 flex items-center  w-full h-full inset-0  hidden group-hover:flex bg-[#f0ff7c] text-black '>
                                <div className='shrink-0 marquee-effect flex items-center'>
                                    <div className='whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={contactHover} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR ENVOYER UN FAX</span>
                                        <img src={contactHover} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR ENVOYER UN FAX</span>
                                    </div>
                                    <div className='shrink-0 whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={contactHover} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR ENVOYER UN FAX</span>
                                        <img src={contactHover} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>POUR ENVOYER UN FAX</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='border-b-[1px] border-[#f2f2f299] w-screen relative overflow-hidden group'>
                            <a className='block leading-[0.7] pt-[1.5vw] pb-0' href="/blogue">
                                <span>BLOGUE</span>
                            </a>
                            <div className='absolute top-0 left-0 flex items-center  w-full h-full inset-0  hidden group-hover:flex bg-[#f0ff7c] text-black '>
                                <div className='shrink-0 marquee-effect flex items-center'>
                                    <div className='whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={blogueHover1} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>LIRE LES ARTICLES</span>
                                        <img src={blogueHover2} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>LIRE LES ARTICLES</span>
                                    </div>
                                    <div className='shrink-0 whitespace-nowrap flex items-center gap-5 pr-5'>
                                        <img src={blogueHover1} alt="project-1-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>LIRE LES ARTICLES</span>
                                        <img src={blogueHover2} alt="project-2-img" className='w-[15vw] h-[5.35vw] rounded-full object-cover' />
                                        <span className='leading-[0.7] pt-[1.5vw] pb-0'>LIRE LES ARTICLES</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </nav>
            </div>
        </div >
    )
}

export default FullNavPage