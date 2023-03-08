function Card({ game }) {
  const { imageSrc, imageAlt } = game;

  return (
    <div className="card border-4 rounded-lg mb-5 flex h-full w-full lg:h-64">
      <div className="relative bg-black sm:h-64 lg:h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover h-full w-full group-hover:opacity-60"
        />
      </div>
    </div>
  );
}

export default Card;
