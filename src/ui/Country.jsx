const Country = ({ country }) => {
  return (
    <li className="flex flex-col items-center gap-[2px] text-[17px] font-semibold bg-dark2 border-solid border-l-[5px] border-brand1 rounded-xl text-light2 py-3 px-5 ">
      <span className="text-[25px] leading-[1] ">{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default Country;
