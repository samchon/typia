import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagPattern =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagPattern",
  )(CommentTagPattern)(
    (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
