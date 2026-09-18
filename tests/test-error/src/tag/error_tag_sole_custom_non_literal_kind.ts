import typia, { tags } from "typia";

// A custom tag whose `kind` is not a literal is malformed as well, and must be
// reported even as the only tag on the type (samchon/typia#2400).
type Loose = tags.TagBase<{
  target: "string";
  kind: string;
  value: undefined;
}>;
typia.createIs<string & Loose>();
