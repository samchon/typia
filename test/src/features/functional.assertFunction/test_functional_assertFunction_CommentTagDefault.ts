import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertFunction_CommentTagDefault =
  _test_functional_assertFunction(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertFunction(p),
  );
