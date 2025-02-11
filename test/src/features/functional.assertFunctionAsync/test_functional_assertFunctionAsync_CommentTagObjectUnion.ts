import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertFunctionAsync_CommentTagObjectUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.assertFunction(p),
  );
