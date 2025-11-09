import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateEqualsReturnAsync_CommentTagInfinite =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
      typia.functional.validateEqualsReturn(p),
    );
