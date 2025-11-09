import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsFunction_CommentTagRange = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertEqualsFunction(p),
  );
