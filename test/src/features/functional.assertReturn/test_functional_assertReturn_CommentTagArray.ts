import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_CommentTagArray = (): void => _test_functional_assertReturn(TypeGuardError)(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.assertReturn(p),
)