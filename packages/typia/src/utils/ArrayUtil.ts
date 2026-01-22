export namespace ArrayUtil {
  export const has = <T>(array: T[], pred: (elem: T) => boolean): boolean =>
    array.some(pred);

  export const add = <T>(
    array: T[],
    value: T,
    pred: (x: T, y: T) => boolean = (x, y) => x === y,
  ): boolean => {
    if (array.some((elem) => pred(elem, value))) return false;
    array.push(value);
    return true;
  };

  export const set = <Key, T>(
    array: T[],
    value: T,
    key: (elem: T) => Key,
  ): void => {
    if (array.some((elem) => key(elem) === key(value))) return;
    array.push(value);
  };

  export const take = <T>(
    array: T[],
    pred: (elem: T) => boolean,
    init: () => T,
  ): T => {
    const index: number = array.findIndex(pred);
    if (index !== -1) return array[index]!;

    const elem: T = init();
    array.push(elem);
    return elem;
  };

  export const repeat = <T>(
    count: number,
    closure: (index: number, count: number) => T,
  ): T[] => new Array(count).fill("").map((_, index) => closure(index, count));
}
