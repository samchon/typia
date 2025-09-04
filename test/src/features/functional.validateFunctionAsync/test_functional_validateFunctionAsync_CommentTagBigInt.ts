import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateFunctionAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.validateFunction(p),
    );
