import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertFunctionCustom_CommentTagInfinite =
  _test_functional_assertFunction(CustomGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
