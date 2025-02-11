import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsFunction_CommentTagLength =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertEqualsFunction(p),
  );
