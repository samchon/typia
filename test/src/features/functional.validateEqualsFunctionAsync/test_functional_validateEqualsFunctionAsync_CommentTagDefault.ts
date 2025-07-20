import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateEqualsFunctionAsync_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("CommentTagDefault")(
      CommentTagDefault,
    )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.validateEqualsFunction(p),
    );
