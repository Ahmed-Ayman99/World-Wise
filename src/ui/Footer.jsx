import { BiCodeAlt } from "react-icons/bi";

const Footer = ({ className }) => {
  return (
    <footer
      className={`flex items-center justify-center text-sm uppercase text-light2 ${className}`}
    >
      <div className="mx-aut flex items-center justify-center gap-1 px-4 py-0 text-base capitalize order-2 ">
        <BiCodeAlt className="w-4 h-4 " />
        <span>{new Date().getFullYear()}</span> by
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary text-brand2 transition-all duration-300 hover:scale-110 first-letter "
          href="https://www.linkedin.com/in/ahmed-ayman-723605229"
        >
          Ahmed Ayman
        </a>
      </div>
    </footer>
  );
};

export default Footer;
