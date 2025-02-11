import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_isFunctionAsync_CommentTagTypeBigInt =
  _test_functional_isFunctionAsync("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.isFunction(p),
  );
