import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_CommentTagObjectUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.assertReturn(p),
  );
