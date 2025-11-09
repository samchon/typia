import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateEqualsParametersAsync_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("CommentTagDefault")(
      CommentTagDefault,
    )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.validateEqualsParameters(p),
    );
