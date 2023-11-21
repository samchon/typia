export const $convention = (rename: (str: string) => string) => {
  const main = (input: any): any => {
    if (typeof input === "object")
      if (input === null) return null;
      else if (Array.isArray(input)) return input.map(main);
      else if (
        input instanceof Boolean ||
        input instanceof BigInt ||
        input instanceof Number ||
        input instanceof String
      )
        return input.valueOf();
      else if (input instanceof Date) return new Date(input);
      else if (
        input instanceof Uint8Array ||
        input instanceof Uint8ClampedArray ||
        input instanceof Uint16Array ||
        input instanceof Uint32Array ||
        input instanceof BigUint64Array ||
        input instanceof Int8Array ||
        input instanceof Int16Array ||
        input instanceof Int32Array ||
        input instanceof BigInt64Array ||
        input instanceof Float32Array ||
        input instanceof Float64Array ||
        input instanceof DataView
      )
        return input;
      else return object(input);
    return input;
  };
  const object = (input: Record<string, any>) =>
    Object.fromEntries(
      Object.entries(input).map(([key, value]) => [rename(key), main(value)]),
    );
  return main;
};
