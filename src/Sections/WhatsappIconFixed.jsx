import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsappIconFixed = () => {
  return (
    <div className=" bottom-5 right-5 fixed bg-green-500 p-4 rounded-full z-50">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className=" top-0 right-0"
      >
        <WhatsAppIcon fontSize="large" />
      </a>
    </div>
  );
};

export default WhatsappIconFixed;
