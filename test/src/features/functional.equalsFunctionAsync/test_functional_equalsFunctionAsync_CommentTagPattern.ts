import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_equalsFunctionAsync_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagPattern")(
      CommentTagPattern,
    )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.equalsFunction(p),
    );
