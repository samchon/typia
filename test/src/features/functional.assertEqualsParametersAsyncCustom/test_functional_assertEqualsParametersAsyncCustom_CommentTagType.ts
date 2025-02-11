import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagType =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagType",
  )(CommentTagType)((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
