import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertFunctionCustom_CommentTagDefault =
  _test_functional_assertFunction(CustomGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
