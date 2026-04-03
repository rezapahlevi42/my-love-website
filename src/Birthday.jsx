import { useEffect, useState } from 'react'
import PageTransition from "./components/PageTransition";
import TextType from './components/TextType';

const images = [
  { src: "/images/Dian.png", modal: "/images/modal-dian.png" },
  { src: "/images/Risa.png", modal: "/images/modal-risa.png" },
  { src: "/images/Tegar.png", modal: "/images/modal-tegar.png" },
  { src: "/images/Aura.png", link: "https://drive.google.com/file/d/1bGXuDXnQEObTcMC6m4hz1OhItM1w9Z-I/view?usp=drive_link" },
  { src: "/images/Afi.png", modal: "/images/modal-afi.png" },
  { src: "/images/Maya.png", modal: "/images/modal-maya.png" },
  { src: "/images/Elisa.png", modal: "/images/modal-elisa.png" },
  { src: "/images/Nasywa.png", modal: "/images/modal-nasywa.png" },
  { src: "/images/Lia.png", modal: "/images/modal-lia.png" },
  { src: "/images/Haura.png", modal: "/images/modal-haura.png" },
  { src: "/images/Reza.png", modal: "/images/modal-reza.png" },
];

export default function GridGallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
  const [modalSrc, setModalSrc] = useState(null);

  const handleMouseMove = (e) => {
    setTooltip({ visible: true, x: e.clientX + 14, y: e.clientY + 14 });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <PageTransition>
      <main className="relative bg-[#060010] overflow-x-hidden">

        {/* TOOLTIP */}
        {tooltip.visible && (
          <div
            className="fixed z-[9999] pointer-events-none px-4 py-2 rounded-xl font-['Montserrat'] text-white text-sm font-semibold border border-white/20 bg-white/10 backdrop-blur-md shadow-xl"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            Buka Untuk Baca 💌
          </div>
        )}

        {/* MODAL */}
        {modalSrc && (
          <div
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setModalSrc(null)}
          >
            <div
              className="relative max-w-[80vw] max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalSrc}
                alt="modal"
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setModalSrc(null)}
                className="absolute top-[-40px] right-0 text-white font-['Montserrat'] text-sm font-semibold px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
              >
                Tutup ✕
              </button>
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-[300px]">
          <img
            src="/images/hero-birthday.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center mt-[100px]">
            <TextType
              text={["selamat ulang tahun sayang", "ini halaman khusus buat ultahmu", "Scroll Aja Ke Bawah!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="●"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              className="text-white text-[90px] font-bold font-['Montserrat'] tracking-wide leading-[1.2]"
            />
          </div>
        </div>

        {/* HEADING SECTION */}
        <div className="h-fit w-screen flex flex-col items-center justify-center overflow-hidden py-[50px]">
          <h1 className="text-[60px] font-['Marcellus'] font-bold text-white">
            Ucapan Ultah Dari Kita Semua :)
          </h1>
        </div>

        {/* GRID GALLERY SECTION */}
        <div className="h-fit flex flex-col items-center justify-center px-[80px] py-[50px]">
          <div className="w-full flex flex-wrap justify-center gap-[10px]">
            {images.map((item, i) => (
              <div
                key={i}
                className="relative rounded-lg w-[calc(33.333%-10px)] cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
  if (item.link) {
    window.open(item.link, "_blank");
  } else {
    setModalSrc(item.modal);
  }
}}
              >
                <div className="w-full h-full px-[10px] py-[10px]">
                  <img
                    src={item.src}
                    alt=""
                    className="
                      w-full h-full object-contain
                      transition duration-500 ease-out
                      hover:scale-125 hover:rotate-3
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="h-screen bg-gradient-to-b from-[#060010] to-[#1d004d] text-white lg:py-[6.9375rem] lg:px-[10rem] md:px-[2.0625rem] md:py-[7.1875rem] px-[1rem] py-[2rem] grid place-items-center">
          <div className="mb-10 mx-auto flex flex-col md:flex-col lg:flex-col items-center justify-center text-center lg:text-left lg:h-[29.0625rem] w-full h-[40.25rem] md:h-[54.75rem]">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <h2 className="font-['Marcellus'] lg:text-[50px] md:text-[1.875rem] text-[1.3125rem] lg:w-[34rem] w-full text-left mt-[4.9375rem] lg:mt-0 font-semibold lg:order-1 order-2">
                Still Made With Love, By Reza (Again) 👋🚴‍♂️
              </h2>
              <div className="flex justify-end lg:order-2 order-1">
                <img
                  src="/images/pp-footer.png"
                  alt="Footer"
                  className="md:w-[15.3125rem] md:h-[15.3125rem] w-[7.5rem] h-[7.5rem] object-contain ml-auto"
                />
              </div>
            </div>
          </div>
          <div className="text-[15px] text-[rgba(248,248,248,0.72)] mt-0" style={{ fontWeight: "300" }}>
            <span className="font-bold font-['Montserrat']">Copyright ©2026 | Reza Pahlevi's Corner of Love: </span>
            All rights reserved, because love is the most beautiful copyright of all.🏃‍♂️
          </div>
        </footer>

      </main>
    </PageTransition>
  );
}