import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagInfinite =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagInfinite",
  )(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
