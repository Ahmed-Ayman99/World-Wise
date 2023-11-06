const Pricing = () => {
  return (
    <section className="grid grid-cols-2 gap-18 py-12 px-12 h-[480px] gap-[70px]">
      <div className="self-center content-center">
        <h2 className="mb-14 text-5xl text-light2">
          Simple pricing.
          <br /> Just $9/month.
        </h2>

        <p className="text-light3 text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
          labore mollitia iusto. Recusandae quos provident, laboriosam fugit
          voluptatem iste.
        </p>
      </div>

      <img
        alt="pricing"
        src="/img-2.jpg"
        className="w-[100%] h-96 object-contain"
      />
    </section>
  );
};

export default Pricing;
