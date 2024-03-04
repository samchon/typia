import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsFunctionCustom_CommentTagRange =
  _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
