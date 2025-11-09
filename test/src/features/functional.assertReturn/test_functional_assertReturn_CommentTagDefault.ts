import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_CommentTagDefault = (): void => _test_functional_assertReturn(TypeGuardError)(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.assertReturn(p),
)