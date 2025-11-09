import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_CommentTagPattern = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)