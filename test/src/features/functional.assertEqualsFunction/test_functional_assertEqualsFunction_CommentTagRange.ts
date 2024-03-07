import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_CommentTagRange =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertEqualsFunction(p),
  );
