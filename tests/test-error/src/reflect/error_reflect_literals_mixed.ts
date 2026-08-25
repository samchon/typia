import typia from "typia";

// `null` is a member `reflect.literals` renders, so an argument that mixes it
// with a non-literal must still be rejected -- the one-axis negative twin of
// the bare `null` and the uninhabited arguments that #2377 made compile. This
// suite only proves the rejection; the diagnostic each composition earns is
// asserted by TestReflectLiteralsNonLiteralRejectionTransform.
typia.reflect.literals<string | null>();
typia.reflect.literals<"a" | number>();
