import typia from "typia";

export const isDate = (x: unknown): boolean => typia.is<Date>(x);
export const isUint8 = (x: unknown): boolean => typia.is<Uint8Array>(x);
export const isMap = (x: unknown): boolean => typia.is<Map<string, number>>(x);
export const isSet = (x: unknown): boolean => typia.is<Set<string>>(x);
