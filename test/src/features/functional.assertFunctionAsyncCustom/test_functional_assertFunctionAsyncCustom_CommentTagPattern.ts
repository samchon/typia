import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertFunctionAsyncCustom_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagPattern")(
      CommentTagPattern,
    )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
