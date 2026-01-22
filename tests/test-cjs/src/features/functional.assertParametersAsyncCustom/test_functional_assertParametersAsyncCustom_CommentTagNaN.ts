import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertParametersAsyncCustom_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
