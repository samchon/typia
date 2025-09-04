import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateFunctionAsync_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("CommentTagNaN")(CommentTagNaN)(
      (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
        typia.functional.validateFunction(p),
    );
