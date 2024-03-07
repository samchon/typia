import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagDefault =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagDefault",
  )(CommentTagDefault)(
    (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
