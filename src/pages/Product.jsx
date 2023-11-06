const Product = () => {
  return (
    <section className="grid grid-cols-2 gap-18 py-12 px-12 h-[480px] gap-[70px]">
      <img
        alt="pricing"
        src="/img-2.jpg"
        className="w-[100%] h-96 object-contain"
      />

      <div className="self-center content-center">
        <h2 className="mb-14 text-5xl text-light2">About WorldWide.</h2>
        <p className="text-light3 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
          dicta illum vero culpa cum quaerat architecto sapiente eius non
          soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </p>

        <p className="text-light3 text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi
          officiis et.
        </p>
      </div>
    </section>
  );
};

export default Product;
