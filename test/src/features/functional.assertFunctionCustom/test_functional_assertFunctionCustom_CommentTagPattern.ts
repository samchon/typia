import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertFunctionCustom_CommentTagPattern =
  _test_functional_assertFunction(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
