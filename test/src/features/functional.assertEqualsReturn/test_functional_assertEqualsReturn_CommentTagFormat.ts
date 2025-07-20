import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsReturn_CommentTagFormat = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertEqualsReturn(p),
  );
