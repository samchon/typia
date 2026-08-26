import typia from "typia";

// `reflect.literals` hands back the members of a union, so an argument naming
// none has no list to give and must be refused rather than compiled into an
// empty array (issue #2377). `null` is the same case: it is a metadata flag,
// not a listable constant.
type Empty = never;

typia.reflect.literals<never>();
typia.reflect.literals<Empty>();
typia.reflect.literals<Exclude<"a" | "b", "a" | "b">>();
typia.reflect.literals<null>();
