import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_equalsFunctionAsync_CommentTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.equalsFunction(p),
    );
