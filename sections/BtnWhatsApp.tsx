interface WhatsAppButtonProps {
  /** @title Texto do botão */
  buttonText?: string;
  /** @title Número do WhatsApp */
  phoneNumber: string;
  /** @title Mensagem do WhatsApp */
  message: string;
  /** @hide	 */
  className?: string;  // Classe CSS personalizada (opcional)
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre seus produtos. Poderia me ajudar?",
  className = "flex items-center text-white rounded"
}: WhatsAppButtonProps) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${5535997555813}?text=${formattedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} fixed bottom-4 right-4 z-[100]`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10 mr-2"
      />
    </a>
  );
};

export default WhatsAppButton;
