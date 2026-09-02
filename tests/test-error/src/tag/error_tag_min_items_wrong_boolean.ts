import typia, { tags } from "typia";

// MinItems declares `target: "array"`, so applying it to a boolean must reject
// the tag and report the declared array target rather than the boolean host.
typia.createIs<boolean & tags.MinItems<1>>();
