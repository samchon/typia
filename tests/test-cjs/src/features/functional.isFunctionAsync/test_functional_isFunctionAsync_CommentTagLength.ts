import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_isFunctionAsync_CommentTagLength =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("CommentTagLength")(CommentTagLength)(
      (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
        typia.functional.isFunction(p),
    );
