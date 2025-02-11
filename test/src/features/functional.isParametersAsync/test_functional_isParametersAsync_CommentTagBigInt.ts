import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_isParametersAsync_CommentTagBigInt =
  _test_functional_isParametersAsync("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.isParameters(p),
  );
