import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateEqualsReturnAsync_CommentTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.validateEqualsReturn(p),
    );
