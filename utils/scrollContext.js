import { useState, useEffect, createContext } from "react";

const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return <ScrollContext.Provider value={{ scroll, setScroll }}>{children}</ScrollContext.Provider>;
};

export { ScrollContext, ScrollContextProvider };
