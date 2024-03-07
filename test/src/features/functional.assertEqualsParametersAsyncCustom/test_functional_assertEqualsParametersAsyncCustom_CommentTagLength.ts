import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagLength =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagLength",
  )(CommentTagLength)(
    (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
