import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_CommentTagArray = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertParameters(p),
)