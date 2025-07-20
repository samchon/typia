import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateFunctionAsync_CommentTagArray =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("CommentTagArray")(CommentTagArray)(
      (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
        typia.functional.validateFunction(p),
    );
