import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_CommentTagArray = (): void => _test_functional_assertReturn(CustomGuardError)(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)