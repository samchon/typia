import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "CommentTagFormat",
    )(CommentTagFormat)(
      (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
