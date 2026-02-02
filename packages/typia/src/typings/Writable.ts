import { ClassProperties } from "./ClassProperties";

export type Writable<T extends object> = {
  -readonly [P in keyof T]: T[P];
};

export function Writable<T extends object>(
  elem: T,
): Writable<ClassProperties<T>> {
  return elem as any;
}
