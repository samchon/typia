import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsFunction_CommentTagDefault =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertEqualsFunction(p),
  );
