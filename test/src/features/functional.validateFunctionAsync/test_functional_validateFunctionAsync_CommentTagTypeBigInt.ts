import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateFunctionAsync_CommentTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.validateFunction(p),
    );
