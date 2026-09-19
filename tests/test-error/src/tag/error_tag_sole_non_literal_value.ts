import typia, { tags } from "typia";

// A tag whose value is not a literal is malformed. With no valid tag beside it,
// the analyzer used to return before reporting it, so the constraint vanished
// and `-1` passed a `Minimum` check (samchon/typia#2400).
typia.createIs<number & tags.Minimum<number>>();
