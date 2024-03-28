import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagFormat =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagFormat",
  )(CommentTagFormat)(
    (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
