import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsParametersAsync_CommentTagArray =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "CommentTagArray",
    )(CommentTagArray)(
      (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
        typia.functional.assertEqualsParameters(p),
    );
