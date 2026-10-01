import { TagBase } from "./TagBase";

/**
 * Excluded literal values.
 *
 * `Exclude<Values>` is a type tag that rejects the listed literal values while
 * keeping the rest of the base type valid. List every excluded value in one
 * tuple — the tag is exclusive, so a second `Exclude` on the same type is a
 * compile error (their JSON schema fragments could not merge).
 *
 * In JSON schema the constraint appears as `not: { enum: [...] }`. Strict LLM
 * schemas reject this tag. `typia.random` does not consult it either: generated
 * values may collide with the excluded list.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface IConfig {
 *     port: number & tags.Exclude<[0, 22, 80]>;
 *     name: string & tags.Exclude<["admin", "root"]>;
 *   }
 *
 * @template Values Tuple of excluded literal values
 *
 * @evidence contracts/common.md#principled-implementation The tuple of excluded literals is placed in `schema.not.enum`, the JSON Schema form of "none of these". The tag is exclusive so there is exactly one tuple to merge. Typed as an arbitrary readonly tuple of bigint, number or string, it does not by itself verify the values are valid for the base type.
 * @evidence contracts/common.md#clear-and-simple-design A single TagBase over the tuple; the name shadows the global Exclude only within the tags namespace and does not interfere with TypeScript's utility type.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It states its limits in the contract: strict LLM schemas reject it and typia.random does not honor it, rather than concealing them.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the one-tuple rule, the schema form, the LLM and random limitations and provides a number and string example.
 */
export type Exclude<Values extends readonly (bigint | number | string)[]> =
  TagBase<{
    target: "bigint" | "number" | "string";
    kind: "exclude";
    value: undefined;
    exclusive: true;
    schema: {
      not: {
        enum: Values;
      };
    };
  }>;
