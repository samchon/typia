import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertFunctionCustom_CommentTagNaN =
  _test_functional_assertFunction(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
