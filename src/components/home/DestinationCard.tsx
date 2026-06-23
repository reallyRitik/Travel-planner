

interface DestinationCardProps {
  title: string;
  price: string;
  image: string;
}

export default function DestinationCard({
  title,
  price,
  image,
}: DestinationCardProps) {
  return (
    <div
      className="
      group
      relative
      h-[430px]
      rounded-[28px]
      overflow-hidden
      cursor-pointer
      shrink-0
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
        absolute inset-0
        h-full
        w-full
        object-cover
        transition-all duration-700
        group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-t
        from-black/90
        via-black/10
        to-transparent
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 z-10">

        <h3
          className="
          text-white
          text-[30px]
          font-semibold
          leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-2
          text-white/90
          text-lg
          "
        >
          {price}
        </p>

      </div>

      {/* Hover Arrow */}
      <div
        className="
        absolute
        right-6
        bottom-6

        h-12
        w-12

        rounded-full
        bg-white/15
        backdrop-blur-md

        flex
        items-center
        justify-center

        text-white

        opacity-0
        translate-y-3

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
        "
      >
        →
      </div>
    </div>
  );
}