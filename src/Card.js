function Card({ game }) {
  return (
    <div className="card border-4 rounded-lg rounded mb-5 flex h-full w-full lg:h-64">
      <div className="relative bg-black sm:h-64 lg:h-full">
        {/* Image */}
        <img
          src={game.imageSrc}
          alt={game.imageAlt}
          className="object-cover h-full w-full group-hover:opacity-60"
        />
      </div>
    </div>
  );
}

export default Card;
