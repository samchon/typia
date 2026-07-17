import typia, { tags } from "typia";

// Minimum declares `exclusive: ["minimum", "exclusiveMinimum"]` and its doc
// comment states it is "mutually exclusive with ExclusiveMinimum - you cannot
// use both on the same property". The declaration is the spec, so this cross-
// kind intersection must be a compile error.
typia.createIs<number & tags.Minimum<0> & tags.ExclusiveMinimum<5>>();
