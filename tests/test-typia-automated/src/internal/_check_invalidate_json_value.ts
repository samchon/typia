const iterate = (value: any): boolean =>
  typeof value === "object"
    ? value === null
      ? false
      : Array.isArray(value)
        ? iterate_array(value)
        : iterate_object(value)
    : typeof value === "bigint";
const iterate_object = (obj: any): boolean => Object.values(obj).every(iterate);
const iterate_array = (elements: any[]): boolean =>
  elements.some((elem) => elem === undefined || iterate(elem));

export const _check_invalidate_json_value = iterate;
