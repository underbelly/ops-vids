import { useState } from "react";

export const useToggle = (
  initialValue: boolean
): [boolean, (newValue?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);
  const toggle = (newValue?: boolean) =>
    setValue((currentValue) => (newValue != null ? newValue : !currentValue));
  return [value, toggle];
};

export default useToggle;
