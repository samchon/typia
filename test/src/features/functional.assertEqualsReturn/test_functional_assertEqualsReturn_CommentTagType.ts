import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsReturn_CommentTagType = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertEqualsReturn(p),
  );
