import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Birthday from "./Birthday";
import SplitText from './components/SplitText'
import TiltedCard from './components/TiltedCard'
import BubbleMenu from './components/BubbleMenu'
import CircularGallery from './components/CircularGallery'
import AnimatedContent from './components/AnimatedContent'
import OverlayModal from "./components/OverlayModal";
import HoverImage from "./components/HoverImage";
import Masonry from './components/Masonry';
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselSection from "./components/CarouselSection";
import { Globe } from "@/components/ui/globe"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { ConfettiFireworks } from "@/components/magicui/confetti-fireworks";
import SpotlightCard from './components/SpotlightCard';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Masonryitems = [
    {
      id: "1",
      img: "/images/first-date.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "/images/first-date.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "5",
      img: "/images/first-date.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
];

const BubbleMenuitems = [
  {
    label: 'Halaman Depan 🐬',
     href: '#home',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'Foto-Foto 📸',
    href: '#foto',
    ariaLabel: 'Foto',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'Playlist Kita 🎧',
    href: '#playlist',
    ariaLabel: 'Playlist',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'Surat 📧',
    href: '#surat',
    ariaLabel: 'Kuis',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Cie Ultah 🎉',
    href: '#ultah',
    ariaLabel: 'Ultah',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

function HomeContent() {
const navigate = useNavigate();
const [open, setOpen] = useState(false);

  return (

    <main className="relative bg-[#060010] overflow-hidden">

      <BubbleMenu
  logo={<span style={{ fontWeight: 500 }}>17</span>}
 items={BubbleMenuitems}
  menuAriaLabel="Toggle navigation"
  menuBg="#ffffff"
  menuContentColor="#111111"
  useFixedPosition={false}
  animationEase="back.out(1.5)"
  animationDuration={0.5}
  staggerDelay={0.12}
/>

    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/Hero-Image.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="w-full h-fit flex items-center justify-center mb-[30px]">
    <SplitText
      text="Hello Love!"
      className="font-['Allan'] text-9xl text-center text-[#ffffff]"
      delay={50}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  </div>

  <div className="w-full h-fit flex items-center justify-center mb-[20px]">
    <TiltedCard
      imageSrc="/images/logo-faces.png"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      containerHeight="400px"
      containerWidth="400px"
      imageHeight="400px"
      imageWidth="400px"
      rotateAmplitude={14}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text">
          coba sentuh
        </p>
      }
    />
  </div>

</div>

<div id="foto" className="relative h-[650px] overflow-hidden">
<div style={{ height: '650px', position: 'relative' }}>
  <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
</div>

<div id="playlist" className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
  <div className="mt-[50px] h-fit w-[700px] flex flex-col items-center justify-center">
    <h1 className="text-[50px] font-bold mb-4 text-white text-center font-['Marcellus']">
            Our Playlist 🎧🎵
          </h1>
  </div>
  
<SpotlightCard className="w-fit mt-[30px]" spotlightColor="rgba(0, 229, 255, 0.2)">
  <iframe
    data-testid="embed-iframe"
    src="https://open.spotify.com/embed/playlist/1emvVz3nuJloeZcDaI6xB8?utm_source=generator"
    width="700"
    height="400"
    frameBorder={0}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
    style={{ borderRadius: '12px' }}
  />
</SpotlightCard>
</div>

<div id="surat" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

{/* Background Image */}
  <img
    src="/images/letter-bg2.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <AnimatedContent
    distance={100}
    direction="vertical"
    duration={1}
    ease="power3.out"
    scale={1.1}
    delay={0.3}
  >
    <HoverImage
      src="/images/letter.png"
      width="w-64"
      tooltip = "Klik Buat Buka Sayang :)"
      onClick={() => setOpen(true)}
    />
  </AnimatedContent>

  <OverlayModal open={open} onClose={() => setOpen(false)}>
    <div className="flex flex-col items-center gap-4">
      {/* MODAL BOX */}
  

    {/* BACKGROUND IMAGE */}
    <img
      src="/images/paper2.png"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    

    {/* TEXT CONTENT */}
    <div className="relative z-10 p-6 text-black">
      <h2 className="text-[25px] font-['Marcellus'] font-bold mb-4">
        Letter for My Fav Person 💌
      </h2>

      <p className="leading-relaxed text-black/80 font-['Montserrat'] font-semibold">
        Hi sayang, di perjalanan kita yang hampir satu tahun ini, aku mau bilang makasih yaa udah selalu ada buat aku. Thank you for staying, for choosing me, and for being part of my days. Semoga kita bisa terus bareng-bareng sampai tua nanti yaa, aamiin 🤍 <br> 
        </br>
        <br></br>
Terima kasih juga buat semua memori indahnya yaa. As someone in this relationship, I really appreciate all the “first times” you gave me, yang jujur seru banget dan bikin aku happy ✨🤗. Aku harap sejauh ini kamu juga ngerasa the same way, happy with me, yaa hehe. <br></br><br></br>
Aku masih inget banget gimana deg-degannya kita waktu pertama kali pegangan tangan, foto bareng, sampai date bareng 🤭 honestly, Malang will always be a special place for us sih, no doubt. <br></br><br></br>
Harapannya, semoga kita bisa terus jalan bareng ke depannya. Semoga kita selalu dikasih kesehatan, bisa kelarin kuliah tepat waktu, and all the good things we’ve been praying for 🤲. Aku tau pasti ga bakalan mudah dan seneng terus, pasti ada sedihnya, ada nangis-nangis dikit juga, but I hope we can stay strong and go through everything together ya sayanggg 💗💗. <br></br><br></br>
Pokoknya doa terbaik selalu buat kamu, sayang. Keep being you, the Nayya I know, yang nggak pernah capek cerita ke aku, yang selalu excited sama hal-hal kecil, yang selalu ngingetin aku makan, dan yang selalu perhatian banget sama aku. Please don’t ever change.
Love you always sayangg 💖, now, then, and everything in between. <br></br><br></br>
Kalau kata Film Past Lives, semoga di kehidupan ini kita ditakdirkan untuk bareng dan menua bersama, aamiin 🤍   
      </p>

      <button
        onClick={() => setOpen(false)}
        className="mt-6 px-6 py-2 rounded-full bg-black/90 hover:bg-black/70 transition font-['Montserrat'] text-white"
      >
        Close
      </button>
    </div>
    
    </div>
  </OverlayModal>
</div>


<div className="min-h-screen overflow-hidden flex items-center justify-center px-[150px] py-[120px] bg-[#060010] text-white">
  
      <CarouselSection />
    
    </div>

    <div id="ultah" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

<img
    src="/images/birthday-bg.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <AnimatedContent
    distance={100}
    direction="vertical"
    duration={1}
    ease="power3.out"
    scale={1.1}
    delay={0.3}
  >
    <HoverImage
      src="/images/kue.png"
      width="w-64"
      tooltip = "Klik Aja Buat Liat Surprise 🤭"
      onClick={() => navigate("/birthday")}
    />
  </AnimatedContent>
    <div className="h-fit w-fit mt-[20px]">
      <ConfettiFireworks /> 
</div>

  </div>

<footer className="min-h-screen overflow-hidden bg-gradient-to-b from-[#060010] to-[#1d004d] text-white lg:py-[6.9375rem] lg:px-[10rem] md:px-[2.0625rem] md:py-[7.1875rem] px-[1rem] py-[2rem] grid place-items-center">
      <div className="mb-10 mx-auto flex flex-col md:flex-col lg:flex-col items-center justify-center text-center lg:text-left lg:h-[29.0625rem] w-full h-[40.25rem] md:h-[54.75rem]">
        {/* Bagian atas: Teks dan Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          {/* Reach us di kiri */}
          <h2 className="font-['Marcellus'] eading-[1] lg:text-[50px] md:text-[1.875rem] text-[1.3125rem] lg:w-[34rem] w-full text-left mt-[4.9375rem] lg:mt-0 text-white-500 font-franie font-semibold lg:order-1 order-2">
            Made With Love, By Reza 👋🚴‍♂️
          </h2>

          {/* Logo di kanan */}
          <div className="flex justify-end lg:order-2 order-1">
            <img
              src="/images/pp-footer.png"
              alt="IEEE Logo"
              className="md:w-[15.3125rem] md:h-[15.3125rem] w-[7.5rem] h-[7.5rem] object-contain ml-auto"
            />
          </div>
        </div>

        {/* Bagian bawah: Alamat dan Sosmed */}
      </div>

      {/* Copyright */}
      <div
        className="text-[15px] text-[rgba(248,248,248,0.72)] font-franie mt-[10px]"
        style={{ fontWeight: "300" }}
      >
        <span className="font-bold font-['Montserrat']">Copyright ©2026 | Reza Pahlevi's Corner of Love: </span> All rights reserved, because love is the most beautiful copyright of all.🏃‍♂️
      </div>
    </footer>


</main>


  )
}

export default HomeContent
