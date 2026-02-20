import { TagBase } from "./TagBase";

/**
 * Protocol Buffer field number assignment.
 *
 * `Sequence<N>` assigns a unique field number for protobuf serialization.
 * Field numbers 1-15 use one byte; 19000-19999 are reserved.
 *
 * @template N Field number (1 to 536,870,911, excluding 19000-19999)
 */
export type Sequence<N extends number> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "sequence";
  value: N;
  schema: {
    "x-protobuf-sequence": N;
  };
}>;
