import { TagBase } from "./TagBase";

export type Constant<
  Value extends boolean | number | string,
  Content extends {
    title?: string | undefined;
    description?: string | undefined;
  },
> = Value &
  TagBase<{
    target: "string" | "boolean" | "number";
    kind: "constant";
    value: undefined;
    schema: Content;
  }>;
