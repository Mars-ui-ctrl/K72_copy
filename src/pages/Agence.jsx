import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Carl from '../assets/Carl_480x640.webp';
import Olivier from '../assets/Olivier_480x640.webp';
import ChantalG from '../assets/ChantalG_480x640.webp';
import Michele from '../assets/Michele_480X640.webp';
import Mel from '../assets/MEL_480X640.webp';
import Camille from '../assets/CAMILLE_480X640_2.webp';
import Meggie from '../assets/MEGGIE_480X640_2.webp';
import Joel from '../assets/joel_480X640_3.webp';


const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageCollection = [
    Carl,
    Olivier,
    ChantalG,
    Michele,
    Mel,
    Camille,
    Meggie,
    Joel,
  ]

  imageCollection.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -120%',
        pin: true,
        scrub: true,
        onUpdate: (e) => {
          let imageIndex
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageCollection.length);
          } else {
            imageIndex = imageCollection.length - 1;
          }
          imageRef.current.src = imageCollection[imageIndex];
        }
      }
    })
  })

  return (
    <div>
      <div className="agence-section1">
        <div ref={imageDivRef} className="absolute top-[25%] overflow-hidden left-[30%] ">
          <img ref={imageRef} className="h-80 object-cover rounded-2xl z- " src={Carl} alt="agence-img1" />
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
