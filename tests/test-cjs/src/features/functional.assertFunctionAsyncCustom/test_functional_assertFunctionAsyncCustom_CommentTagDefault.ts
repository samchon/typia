import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertFunctionAsyncCustom_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagDefault")(
      CommentTagDefault,
    )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
