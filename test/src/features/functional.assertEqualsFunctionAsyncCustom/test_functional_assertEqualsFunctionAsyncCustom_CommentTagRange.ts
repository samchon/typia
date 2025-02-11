import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagRange =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagRange",
  )(CommentTagRange)(
    (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
