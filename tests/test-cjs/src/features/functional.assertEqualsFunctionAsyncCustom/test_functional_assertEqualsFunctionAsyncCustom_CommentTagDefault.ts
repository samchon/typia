import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "CommentTagDefault",
    )(CommentTagDefault)(
      (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
