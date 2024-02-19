import { useState } from "react";

export const useCustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerValue, setInnerValue] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (option) => setInnerValue(option);

  return { isOpen, handleToggle, handleClose, innerValue, handleChange };
};
