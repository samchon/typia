import { tags } from "typia";

export interface TypeTagDefault {
  boolean: boolean & tags.Default<false>;
  number: number & tags.Default<1>;
  string: string & tags.Default<"two">;
  text: string & tags.Default<"Very long text, can you understand it?">;
  boolean_and_number_and_string:
    | (boolean & tags.Default<false>)
    | (number & tags.Default<1>)
    | (string & tags.Default<"two">);
  union_but_boolean: (boolean & tags.Default<false>) | number | string;
  union_but_number: boolean | (number & tags.Default<1>) | string;
  union_but_string: boolean | number | (string & tags.Default<"two">);
  boolean_and_number_and_template:
    | (boolean & tags.Default<false>)
    | (number & tags.Default<2>)
    | `prefix_${string}`;
}
export namespace TypeTagDefault {
  export function generate(): TypeTagDefault {
    return {
      boolean: false,
      number: 1,
      string: "two",
      text: "Very long text, can you understand it?",
      boolean_and_number_and_string: false,
      union_but_boolean: false,
      union_but_number: 1,
      union_but_string: "two",
      boolean_and_number_and_template: false,
    };
  }
}
