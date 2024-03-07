import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateFunctionAsync_CommentTagDefault =
  _test_functional_validateFunctionAsync("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.validateFunction(p),
  );
