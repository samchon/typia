import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsFunctionAsync_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "CommentTagFormat",
    )(CommentTagFormat)(
      (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
        typia.functional.assertEqualsFunction(p),
    );
