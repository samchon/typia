import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "CommentTagDefault",
    )(CommentTagDefault)(
      (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
