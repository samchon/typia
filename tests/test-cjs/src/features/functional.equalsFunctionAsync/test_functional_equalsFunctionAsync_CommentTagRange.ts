import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_equalsFunctionAsync_CommentTagRange =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagRange")(CommentTagRange)(
      (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
        typia.functional.equalsFunction(p),
    );
