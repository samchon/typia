import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_isParametersAsync_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_isParametersAsync("CommentTagNaN")(CommentTagNaN)(
      (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
        typia.functional.isParameters(p),
    );
