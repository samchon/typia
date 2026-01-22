import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateEqualsReturnAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.validateEqualsReturn(p),
    );
