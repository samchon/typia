import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertFunctionAsyncCustom_CommentTagLength =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagLength")(
      CommentTagLength,
    )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
