import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagArray =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "CommentTagArray",
    )(CommentTagArray)(
      (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
