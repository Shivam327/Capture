import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  let { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
