import { useState } from "react";

const useSidebar = () => {
  const [item, setItem] = useState<string>("홈");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return {
    item,
    isVisible,
    setItem,
    setIsVisible,
  };
};

export default useSidebar;
