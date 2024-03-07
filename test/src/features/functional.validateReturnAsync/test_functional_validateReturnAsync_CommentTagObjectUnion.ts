import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateReturnAsync_CommentTagObjectUnion =
  _test_functional_validateReturnAsync("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.validateReturn(p),
  );
