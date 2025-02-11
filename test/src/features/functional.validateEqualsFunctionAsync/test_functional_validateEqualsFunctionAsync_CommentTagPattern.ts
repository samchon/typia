import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateEqualsFunctionAsync_CommentTagPattern =
  _test_functional_validateEqualsFunctionAsync("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.validateEqualsFunction(p),
  );
