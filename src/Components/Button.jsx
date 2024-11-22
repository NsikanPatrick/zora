import Marker from "./Marker";

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
  const Inner = () => {
    return (
      <>
        <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
          <span className="absolute -left-[1px]"><Marker markerFill={markerFill} /></span>
          {icon && (
            <img
              src={icon}
              alt="icon"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
          <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
            {children}
          </span>
        </span>
        {/* The glow- classes are custom, defined in index.css */}
        <span className="glow-before glow-after" />
      </>
    );
  };

  return href ? (
    <a
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName}`}
    >
      <Inner />
    </a>
  ) : (
    // g5 = gradient-5
    <button
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group
        ${containerClassName}`
      }
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
