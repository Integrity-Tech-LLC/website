export const pathRootHelper = (path: string) => {
  const delimiter = "/";
  const start = 2;
  const tokens = path.split(delimiter).slice(0, start);
  const result = tokens.join(delimiter);
  return result;
};
