import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "CommentTagPattern",
    )(CommentTagPattern)(
      (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
