import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_equalsFunctionAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagBigInt")(CommentTagBigInt)(
      (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
        typia.functional.equalsFunction(p),
    );
