import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="rounded-lg shadow-lg max-w-lg w-full relative"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <button className="absolute top-2 right-2 text-3xl font-bold text-black" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}