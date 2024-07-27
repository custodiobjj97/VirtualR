import React, { useEffect, useRef } from 'react'
import "./scroll.css"
const Scroll = ({children}) => {
    const ref = useRef(null);
    const handleScroll=()=>{
        const top = ref.current.getBoundingClientRect().top;
        const halfHeight = window.innerHeight * 0.6;
        const isSection = (top - halfHeight) < 0;
        if(isSection){
            ref.current.classList.add('visible')
        }
    }

    useEffect(()=>{
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return (()=>{
            window.removeEventListener('scroll', handleScroll)
        })
    },[])
  return (
    <section className='scroll' ref={ref}>{children}</section>
  )
}

export default Scroll