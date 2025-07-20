import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagLength =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "CommentTagLength",
    )(CommentTagLength)(
      (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
