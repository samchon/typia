import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateEqualsParametersAsync_CommentTagTypeBigInt =
  _test_functional_validateEqualsParametersAsync("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.validateEqualsParameters(p),
  );
