import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsReturn_CommentTagLength = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertEqualsReturn(p),
  );
