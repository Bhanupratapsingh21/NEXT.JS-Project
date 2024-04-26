"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
const MusicSchoolTestimonials = [
    {
      "quote": "Studying guitar fundamentals with Edusic was challenging yet fulfilling. The instructors were patient, and I'm now playing songs I never thought I could.",
      "name": "Arun Khanna",
      "title": "Guitar Learner"
    },
    {
      "quote": "The Electronic Music Production course at Edusic exceeded my expectations. It was comprehensive, the instructors were knowledgeable, and the hands-on projects were enjoyable.",
      "name": "Meera Rajput",
      "title": "Electronic Music Enthusiast"
    },
    {
      "quote": "As a beginner in music production, I found the Music Production Fundamentals course at Edusic informative. The instructors broke down complex concepts into easy-to-understand modules.",
      "name": "Kunal Sharma",
      "title": "Aspiring Producer"
    },
    {
      "quote": "Studying blues guitar techniques with Edusic was transformative. The course material was engaging, and the instructors' passion for the blues was palpable.",
      "name": "Neha Kapoor",
      "title": "Blues Enthusiast"
    },
    {
      "quote": "My experience with Edusic has been mixed. While some courses provided valuable insights, others fell short. However, I appreciate the sense of community and convenience of online learning.",
      "name": "Rahul Gupta",
      "title": "Long-time Learner"
    }
  ]
  
  
  
function MusicschoolTestimonials(){
    return(
        <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
            <h2 className="mt-10 pb-6 md:mt-8 text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-white bg-gradient-to-b from-neutral-50 to-neutral-400">Hear Our Harmony : Voices Of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl"> 
                    <InfiniteMovingCards
                    items={MusicSchoolTestimonials}
                    direction="right"
                    speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicschoolTestimonials

