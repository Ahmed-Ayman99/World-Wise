import { Link, useNavigate } from "react-router-dom";

const Button = ({ children, to, onClick, className }) => {
  const navigate = useNavigate();

  const base = "text-dark0 py-2 px-5 rounded-lg uppercase outline-none";
  const back = "border-solid border-[1px] border-white text-light2";

  if (to === "-1") {
    return (
      <button
        className={base + back}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </button>
    );
  }

  if (to) {
    return (
      <Link className={`${base} bg-brand2 `} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={`bg-brand2 ${base} ${className}`}>
        {children}
      </button>
    );
  }
  return <button className={`bg-brand2 ${base}`}>{children}</button>;
};

export default Button;
