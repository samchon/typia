import { TagBase } from "./TagBase";

export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "bigint" | "number" | "array" | "object";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
