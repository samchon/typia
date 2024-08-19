import { TagBase } from "./TagBase";

export type NoRuntimeCheck<T extends string | number | boolean | bigint> = TagBase<{
  target: T;
  kind: "NoRuntimeCheck";
  value: T;
}>;
