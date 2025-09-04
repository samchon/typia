import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagRange =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "CommentTagRange",
    )(CommentTagRange)(
      (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
