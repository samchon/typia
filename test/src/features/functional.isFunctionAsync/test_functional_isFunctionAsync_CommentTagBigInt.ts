import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_isFunctionAsync_CommentTagBigInt =
  _test_functional_isFunctionAsync("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.isFunction(p),
  );
