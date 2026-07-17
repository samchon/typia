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
 * @example
 *   interface IConfig {
 *     port: number & tags.Exclude<[0, 22, 80]>;
 *     name: string & tags.Exclude<["admin", "root"]>;
 *   }
 *
 * @template Values Tuple of excluded literal values
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
