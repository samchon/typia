import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateEqualsParametersAsync_CommentTagRange =
  _test_functional_validateEqualsParametersAsync("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.validateEqualsParameters(p),
  );
