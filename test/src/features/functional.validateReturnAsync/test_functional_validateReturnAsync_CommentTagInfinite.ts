import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateReturnAsync_CommentTagInfinite =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
      typia.functional.validateReturn(p),
    );
