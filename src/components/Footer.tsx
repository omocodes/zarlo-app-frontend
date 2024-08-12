const Footer = () => {
  return (
    <div className="bg-yellow-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Z A R L O
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
        <span className="hover:text-black cursor-pointer">Contact</span>
        <span className="hover:text-black cursor-pointer">About</span>
        <span className="hover:text-black cursor-pointer">FAQs</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
