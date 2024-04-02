import { TagBase } from "./TagBase";

export type JsonSchemaPlugin<Schema extends object> = TagBase<{
  target: "string" | "boolean" | "number" | "array";
  kind: "jsonPlugin";
  value: undefined;
  schema: Schema;
}>;
