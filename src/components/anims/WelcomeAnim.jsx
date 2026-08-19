import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const WelcomeAnim = () => {
    const welcomeAnim = useRef(null);
    const parentRefAnim = useRef(null);
    const currentPath = useLocation().pathname;
    useGSAP(() => {
        const tl = gsap.timeline();

        // tl.to(parentRefAnim.current,{
        //     display:'block'
        // })
        // tl.from(welcomeAnim.current.children, {
        //     height: 0,
        //     duration: 0.5,
        //     stagger: { amount: -0.2 },
        // })
        gsap.set(parentRefAnim.current, { display: 'flex' });
        gsap.set(welcomeAnim.current.children, { y: '0%' });

        tl.to(welcomeAnim.current.children, {
            y: '100%',
            duration: 0.5,
            stagger: { amount: -0.3 },
        })

        tl.to(parentRefAnim.current, {
            display: 'none'
        })

        tl.to(welcomeAnim.current.children, {
            y: '0%'
        })
    }, [currentPath]);
    return (
        <div ref={parentRefAnim} className='h-screen z-10 top-0 w-full flex fixed'>
            <div ref={welcomeAnim} className='h-full flex w-full '>
                <div className='bg-black h-full w-1/5'></div>
                <div className='bg-black h-full w-1/5'></div>
                <div className='bg-black h-full w-1/5'></div>
                <div className='bg-black h-full w-1/5'></div>
                <div className='bg-black h-full w-1/5'></div>
            </div>
        </div>
    )
}

export default WelcomeAnim