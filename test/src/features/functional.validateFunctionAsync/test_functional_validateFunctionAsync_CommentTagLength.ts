import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateFunctionAsync_CommentTagLength =
  _test_functional_validateFunctionAsync("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.validateFunction(p),
  );
