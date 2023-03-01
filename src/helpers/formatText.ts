export const formatText = (text: string) => {
  return text.length > 12 ? text.substring(0, 10) + "..." : text;
};
