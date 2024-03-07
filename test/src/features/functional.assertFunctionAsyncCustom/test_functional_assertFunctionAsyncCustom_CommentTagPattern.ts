import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagPattern =
  _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
