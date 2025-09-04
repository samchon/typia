import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsFunctionAsync_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "CommentTagDefault",
    )(CommentTagDefault)(
      (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
        typia.functional.assertEqualsFunction(p),
    );
