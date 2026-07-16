import { _notationKeyCollision } from "./_notationKeyCollision";

export const _notationAssign = (
  output: Record<string, any>,
  sources: Record<string, string>,
  source: string,
  value: any,
  rename: (str: string) => string,
): void => {
  const destination: string = rename(source);
  if (Object.hasOwn(output, destination))
    _notationKeyCollision(sources[destination]!, source, destination);
  output[destination] = value;
  sources[destination] = source;
};
