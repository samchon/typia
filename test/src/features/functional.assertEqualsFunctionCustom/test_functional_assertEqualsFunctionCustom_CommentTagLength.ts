import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsFunctionCustom_CommentTagLength =
  _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
