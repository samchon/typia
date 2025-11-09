import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertEqualsParametersAsync_CommentTagInfinite =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "CommentTagInfinite",
    )(CommentTagInfinite)(
      (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
        typia.functional.assertEqualsParameters(p),
    );
