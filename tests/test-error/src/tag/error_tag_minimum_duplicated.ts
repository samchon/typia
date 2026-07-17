import typia, { tags } from "typia";

// Minimum declares `exclusive: ["minimum", "exclusiveMinimum"]`, naming its own
// kind first, so one property may never carry two of them. Left unenforced, this
// emitted `{"minimum": 0}` while generating a validator that required 5.
typia.createIs<number & tags.Minimum<5> & tags.Minimum<0>>();
