import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertParametersAsyncCustom_CommentTagArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("CommentTagArray")(
      CommentTagArray,
    )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
