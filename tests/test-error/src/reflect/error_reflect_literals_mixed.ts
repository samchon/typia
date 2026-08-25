import typia from "typia";

// `null` is a member `reflect.literals` renders, so an argument that mixes it
// with a non-literal is not "no literal found" but "not only literals" -- and
// must still be rejected. This is the one-axis negative twin of the bare
// `null` and `never` arguments that #2377 made compile.
typia.reflect.literals<string | null>();
typia.reflect.literals<"a" | number>();
