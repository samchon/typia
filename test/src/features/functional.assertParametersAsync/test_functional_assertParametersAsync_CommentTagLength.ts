import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_CommentTagLength = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.assertParameters(p),
)