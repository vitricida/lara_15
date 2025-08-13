import "./styles.css";

interface ScrollChevronsProps {
  showUp?: boolean;
  showDown?: boolean;
}

const ScrollChevrons = ({
  showUp = true,
  showDown = true,
}: ScrollChevronsProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      {showUp && (
        <div className="scroll-chevron scroll-up" onClick={scrollToTop}>
          <svg
            width="30"
            height="18"
            viewBox="0 0 30 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L15 15L28 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {showDown && (
        <div className="scroll-chevron scroll-down" onClick={scrollToNext}>
          <svg
            width="30"
            height="18"
            viewBox="0 0 30 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L15 15L28 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollChevrons;
