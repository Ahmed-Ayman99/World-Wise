const FormRow = ({ children, label }) => {
  return (
    <div className="flex flex-col mb-6 gap-[5px]">
      <label
        className="text-base font-semibold text-light2"
        htmlFor={children.props?.id}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormRow;
