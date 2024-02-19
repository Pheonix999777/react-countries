import clsx from "clsx";
import sty from "./style.module.scss";
import { useCustomDropdown } from "./useCostumDropdown";
import { useContext } from "react";
import { MainContext } from "modules/Main/Provider/MainContext";

export const CustomDropdown = ({
  options = [],
  firstDefault,
  placeholder,
  value,
  setValue = () => {},
  onChange = () => {},
}) => {
  const { isOpen, handleToggle, handleClose, innerValue, handleChange } =
    useCustomDropdown();

  const { isDarkMode } = useContext(MainContext);
  return (
    <div
      className={clsx(sty.dropdown, {
        [sty.open]: isOpen,
      })}
    >
      <div
        className={isDarkMode ? sty.header__dark : sty.header}
        onClick={handleToggle}
      >
        <span>
          {value?.label
            ? value.label
            : innerValue?.label
            ? innerValue.label
            : firstDefault
            ? options[0].label
            : placeholder}
        </span>
        <span className={sty.arrowIcon}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
              fill={isDarkMode ? "white" : "#111517"}
            />
          </svg>
        </span>
      </div>
      <ul className={isDarkMode ? sty.options__dark : sty.options}>
        {options.map((option, index) => (
          <li
            className={sty.option}
            key={option.value || index}
            onClick={() => {
              handleChange(option);
              setValue(option);
              handleClose();
              onChange(option);
            }}
          >
            <button
              className={isDarkMode ? sty.optionBtn__dark : sty.optionBtn}
            >
              {" "}
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
