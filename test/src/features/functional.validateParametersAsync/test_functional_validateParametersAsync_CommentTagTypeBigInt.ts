import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateParametersAsync_CommentTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.validateParameters(p),
    );
