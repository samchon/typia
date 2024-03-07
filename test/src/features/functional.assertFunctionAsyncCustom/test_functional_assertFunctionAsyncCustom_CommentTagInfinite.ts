import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagInfinite =
  _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
