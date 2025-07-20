import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_isFunctionAsync_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("CommentTagPattern")(CommentTagPattern)(
      (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
        typia.functional.isFunction(p),
    );
