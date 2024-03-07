import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_CommentTagArray =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "CommentTagArray",
  )(CommentTagArray)(
    (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.assertEqualsParameters(p),
  );
