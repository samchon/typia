import typia, { tags } from "typia";

type Value = { value: number };
type Marker = { marker?: symbol };
type ObjectTag = tags.TagBase<{
  target: "object";
  kind: "SymbolMarkerTest";
  value: true;
  validate: "true";
}>;

typia.createIs<Value & Marker>();
typia.createIs<Value & Marker & ObjectTag>();
typia.createIs<(() => string) & Value & Marker>();
