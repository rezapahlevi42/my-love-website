import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {children}

      {/* Overlay gelap */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#060010",
          opacity: visible ? 0 : 1,
          transition: "opacity 5s ease",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </div>
  );
}