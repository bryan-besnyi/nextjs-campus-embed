import DOMPurify from "dompurify";

export const sanitize = (value) => {
  const sanitizedValue = DOMPurify.sanitize(value);
  return sanitizedValue;
};
