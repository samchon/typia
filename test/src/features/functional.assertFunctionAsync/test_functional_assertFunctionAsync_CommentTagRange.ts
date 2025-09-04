import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertFunctionAsync_CommentTagRange =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagRange")(
      CommentTagRange,
    )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.assertFunction(p),
    );
