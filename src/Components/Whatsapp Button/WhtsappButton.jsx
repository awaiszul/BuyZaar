import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css'; // Custom CSS

const WhatsappButton = () => {
  const phoneNumber = "923240208835"; // apna WhatsApp number Yahan daalo (92 ke sath)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;
