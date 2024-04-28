"use client"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"
const instrector = [
    {
      "id": 1,
      "name": "Pyari Billi",
      "designation": "Piano Instructor",
      "image": "https://i.pinimg.com/236x/b9/c9/84/b9c9842ae604dc9231b740dde34fa139.jpg"
    },
    {
      "id": 2,
      "name": "Badmosh Jerry",
      "designation": "Music Theory Teacher",
      "image": "https://i.pinimg.com/236x/26/4b/93/264b931e2892bf4cef86b2aafcab9c48.jpg"
    },
    {
      "id": 3,
      "name": "Doge Dog",
      "designation": "Voice Coach",
      "image": "https://i.pinimg.com/236x/5e/47/a3/5e47a3c6c1f85255c9e32f294a3dd173.jpg"
    },
    {
      "id": 4,
      "name": "Creazy Tom",
      "designation": "Guitar Instructor",
      "image": "https://i.pinimg.com/236x/10/e0/a5/10e0a55ee5a2be141a896c61d846db58.jpg"
    },
    {
      "id": 5,
      "name": "Bunny The rebbit",
      "designation": "Drum Teacher",
      "image": "https://i.pinimg.com/236x/6e/d8/33/6ed8333012ff3da56ece1b959ccfa42f.jpg"
    },
    {
      "id": 6,
      "name": "Indian Bagad Billa",
      "designation": "Music Appreciation Instructor",
      "image": "https://i.pinimg.com/236x/84/db/91/84db91a41341ee54c69e1bff955dd6c3.jpg"
    }
  ]
  
function Instrector() {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2  className="mt-20 pb-2 md:mt-0 text-center text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-white bg-gradient-to-b from-neutral-50 to-neutral-400">Meet Our Instrectors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover The Talented Professionals Who Will Guide Your Musical Journay</p>
                <div className="flex items-center justify-center">
                    <AnimatedTooltip key={"1"} items={instrector} />
                </div>
            </WavyBackground>
        </div>
    )
}
export default Instrector