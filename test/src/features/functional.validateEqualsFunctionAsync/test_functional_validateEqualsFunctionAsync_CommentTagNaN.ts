import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateEqualsFunctionAsync_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.validateEqualsFunction(p),
    );
