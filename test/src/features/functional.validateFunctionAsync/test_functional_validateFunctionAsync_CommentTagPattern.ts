import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateFunctionAsync_CommentTagPattern =
  _test_functional_validateFunctionAsync("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.validateFunction(p),
  );
