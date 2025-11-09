import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_CommentTagInfinite = (): void => _test_functional_assertFunction(CustomGuardError)(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => CommentTagInfinite) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)