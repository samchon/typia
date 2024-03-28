import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertFunctionAsyncCustom_CommentTagArray =
  _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
