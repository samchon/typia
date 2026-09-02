import typia, { tags } from "typia";

// UniqueItems declares `target: "array"`, so applying it to a string must
// reject the tag and report the declared array target rather than the host.
typia.createIs<string & tags.UniqueItems>();
