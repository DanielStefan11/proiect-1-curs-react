import React from "react";
// React icons
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTopBtn(props) {
  const { scrollBtnVizibility, handleScrollToTop } = props;

  return (
    <div>
      {scrollBtnVizibility ? (
        <button style={scrollBtn} onClick={() => handleScrollToTop()}>
          <FaArrowCircleUp size="1.7rem" />
        </button>
      ) : null}
    </div>
  );
}

const scrollBtn = {
  zIndex: 1,
  cursor: "pointer",
  position: "fixed",
  right: "50px",
  bottom: "50px",
  padding: "0.5rem",
  borderRadius: "10px",
  backgroundColor: "#fff",
  outline: "none",
  border: "3px solid #000",
};

export default ScrollToTopBtn;
