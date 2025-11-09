import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_CommentTagDefault = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)