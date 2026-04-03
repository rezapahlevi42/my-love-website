import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function OverlayModal({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 flex min-h-screen items-start justify-center px-6 py-10">
        <div
  className="
  overflow-hidden
    w-full max-w-md
    bg-black/0
    backdrop-blur-xl
    rounded-2xl
    p-6
    text-white
    border border-white/20
    shadow-2xl
  "
>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
