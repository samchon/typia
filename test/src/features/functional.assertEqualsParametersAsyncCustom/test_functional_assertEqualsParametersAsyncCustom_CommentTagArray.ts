import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagArray =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagArray",
  )(CommentTagArray)(
    (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
