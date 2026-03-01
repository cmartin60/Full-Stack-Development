import { useState } from "react";
import type { ChangeEvent } from "react";

export type FormInputValidator = (value: string) => string | null | undefined;

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(event.target.value);
    if (message) {
      setMessage("");
    }
  };

  const validate = (validator: FormInputValidator) => {
    const result = validator(value);
    const nextMessage = result ? result : "";
    setMessage(nextMessage);
    return nextMessage.length === 0;
  };

  const reset = () => {
    setValue(initialValue);
    setMessage("");
  };

  return {
    value,
    onChange,
    message,
    validate,
    reset,
  };
}
