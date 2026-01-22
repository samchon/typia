import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateReturnAsync_CommentTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.validateReturn(p),
    );
