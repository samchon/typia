import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsFunction_CommentTagPattern =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertEqualsFunction(p),
  );
