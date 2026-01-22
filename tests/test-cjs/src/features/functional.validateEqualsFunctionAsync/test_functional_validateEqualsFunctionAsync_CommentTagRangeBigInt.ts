import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_validateEqualsFunctionAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("CommentTagRangeBigInt")(
      CommentTagRangeBigInt,
    )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.validateEqualsFunction(p),
    );
