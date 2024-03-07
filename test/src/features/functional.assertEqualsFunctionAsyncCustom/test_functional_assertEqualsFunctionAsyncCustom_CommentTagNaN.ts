import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagNaN =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
