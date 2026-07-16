export namespace ObjectDictionary {
  export const create = <T>(): Record<string, T> => Object.create(null);

  export const has = (record: object | undefined, key: PropertyKey): boolean =>
    record !== undefined && Object.prototype.hasOwnProperty.call(record, key);

  export const get = <T>(
    record: Record<string, T> | undefined,
    key: string,
  ): T | undefined => (has(record, key) ? record![key] : undefined);

  export const set = <T>(
    record: Record<string, T>,
    key: string,
    value: T,
  ): void => {
    Object.defineProperty(record, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value,
    });
  };
}
