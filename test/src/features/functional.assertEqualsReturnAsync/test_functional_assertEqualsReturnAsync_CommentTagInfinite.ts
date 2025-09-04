import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertEqualsReturnAsync_CommentTagInfinite =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "CommentTagInfinite",
    )(CommentTagInfinite)(
      (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
        typia.functional.assertEqualsReturn(p),
    );
