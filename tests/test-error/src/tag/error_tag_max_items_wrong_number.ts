import typia, { tags } from "typia";

// MaxItems declares `target: "array"`, so applying it to a number must reject
// the tag and report the declared array target rather than the number host.
typia.createIs<number & tags.MaxItems<2>>();
