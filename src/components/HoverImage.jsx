import { useState } from "react";
import { createPortal } from "react-dom";

export default function HoverImage({
  src,
  alt = "",
  width = "w-64",
  onClick,
  tooltip = "",
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={`${width} h-auto cursor-pointer transition-transform duration-300 hover:scale-125`}
        onMouseMove={(e) =>
          setPos({
            x: e.clientX + 10,
            y: e.clientY + 10,
          })
        }
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />

      {show &&
        createPortal(
          <div
            className="
  fixed z-[9999]
  px-4 py-2
  rounded-xl
  text-lg font-['Montserrat']
  text-white
  bg-black/20 backdrop-blur-lg
  border border-white/20
  shadow-xl
  pointer-events-none
"
            style={{
              left: pos.x,
              top: pos.y,
            }}
          >
            {tooltip}
          </div>,
          document.body
        )}
    </>
  );
}
