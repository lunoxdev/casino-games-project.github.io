function Card({ game }) {
  return (
    <div className="card border-4 rounded-lg rounded mb-5">
      <div className="relative overflow-hidden bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        {/* Image */}
        <img
          src={game.imageSrc}
          alt={game.imageAlt}
          className="mx-auto object-cover h-full w-full object-center group-hover:opacity-60"
        />
      </div>
    </div>
  );
}

export default Card;
