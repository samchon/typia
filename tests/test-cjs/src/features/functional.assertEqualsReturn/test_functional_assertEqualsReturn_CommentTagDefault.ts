import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsReturn_CommentTagDefault = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertEqualsReturn(p),
  );
