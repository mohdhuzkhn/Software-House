import Logo from "../assets/The Webers Logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 bg-blue-200 flex items-center justify-between px-10 py-2 z-50">
      <img className="w-16 rounded-full" src={Logo} alt="Logo" />
      <div className="flex items-center gap-10 p-regular">
        {["Home", "About Us", "Services", "Portfolio", "Faqs"].map(
          (item, idx) => (
            <p
              key={idx}
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </p>
          )
        )}
      </div>

      <div>
        <p className="cursor-pointer p-regular bg-blue-300 hover:bg-blue-100 transition-all duration-300 px-4 py-2 rounded-md">
          Contact Us
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
