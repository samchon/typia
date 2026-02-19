import { OmitNever } from "./OmitNever";

export type ClassProperties<T extends object> = OmitNever<{
  [K in keyof T]: T[K] extends Function ? never : T[K];
}>;
