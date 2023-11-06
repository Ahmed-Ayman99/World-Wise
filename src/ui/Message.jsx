function Message({ message }) {
  return (
    <p className="text-center text-lg w-[80%] font-semibold">
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
