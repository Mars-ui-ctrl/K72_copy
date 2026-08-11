import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


const Agence = () => {
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 25%',
        end: 'top -120%',
        pin: true,
        scrub: true
      }
    })
  })
  return (
    <div>
      <div className="agence-section1">
        <div ref={imageRef} className="absolute top-[25%] overflow-hidden left-[30%] ">
          <img className="h-80 object-cover rounded-2xl z- " src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="agence-img1" />
        </div>
        <div>

          <div className="relative flex flex-col justify-center text-center mt-[56vh]">
            <h1 className="text-[20vw] leading-[0.8] font-[lausanne-500] uppercase">Soixan7e
              <br />
              Douze</h1>
          </div>
          <div className="pl-[40%] mt-5">
            <p className="text-[3.5rem] font-[lausanne-500] indent-[5em] leading-[1]">
              Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="agence-section2 h-screen bg-red-300">

      </div>
    </div>
  )
}

export default Agence
