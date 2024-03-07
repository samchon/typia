import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateEqualsReturnAsync_CommentTagObjectUnion =
  _test_functional_validateEqualsReturnAsync("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.validateEqualsReturn(p),
  );
