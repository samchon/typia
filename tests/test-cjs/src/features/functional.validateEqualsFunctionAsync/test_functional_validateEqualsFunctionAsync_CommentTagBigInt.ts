import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateEqualsFunctionAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.validateEqualsFunction(p),
    );
