import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertFunctionAsyncCustom_CommentTagObjectUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "CommentTagObjectUnion",
  )(CommentTagObjectUnion)(
    (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
