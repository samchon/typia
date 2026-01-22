import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateEqualsParametersAsync_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.validateEqualsParameters(p),
    );
