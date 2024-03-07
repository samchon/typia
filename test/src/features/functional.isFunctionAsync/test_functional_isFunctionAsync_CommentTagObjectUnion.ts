import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_isFunctionAsync_CommentTagObjectUnion =
  _test_functional_isFunctionAsync("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.isFunction(p),
  );
