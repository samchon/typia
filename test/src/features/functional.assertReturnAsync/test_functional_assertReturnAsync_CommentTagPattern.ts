import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertReturnAsync_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("CommentTagPattern")(
      CommentTagPattern,
    )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.assertReturn(p),
    );
