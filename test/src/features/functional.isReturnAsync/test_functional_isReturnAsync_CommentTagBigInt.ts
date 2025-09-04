import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_isReturnAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_isReturnAsync("CommentTagBigInt")(CommentTagBigInt)(
      (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
        typia.functional.isReturn(p),
    );
