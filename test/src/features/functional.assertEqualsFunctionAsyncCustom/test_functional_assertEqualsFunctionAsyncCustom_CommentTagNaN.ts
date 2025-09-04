import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "CommentTagNaN",
    )(CommentTagNaN)((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
