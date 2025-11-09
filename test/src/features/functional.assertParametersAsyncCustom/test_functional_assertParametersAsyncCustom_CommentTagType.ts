import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_CommentTagType = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)