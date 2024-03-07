import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_validateFunctionAsync_CommentTagRangeBigInt =
  _test_functional_validateFunctionAsync("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
    typia.functional.validateFunction(p),
  );
