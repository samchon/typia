import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateReturnAsync_CommentTagArray =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("CommentTagArray")(CommentTagArray)(
      (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
        typia.functional.validateReturn(p),
    );
