import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateReturnAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("CommentTagBigInt")(CommentTagBigInt)(
      (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
        typia.functional.validateReturn(p),
    );
