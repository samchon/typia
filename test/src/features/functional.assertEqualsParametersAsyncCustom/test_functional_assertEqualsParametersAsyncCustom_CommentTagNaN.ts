import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagNaN =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagNaN",
  )(CommentTagNaN)((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
