import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateEqualsReturnAsync_CommentTagLength =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagLength")(
      CommentTagLength,
    )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.validateEqualsReturn(p),
    );
