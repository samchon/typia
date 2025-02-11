import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertParameters_CommentTagDefault =
  _test_functional_assertParameters(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertParameters(p),
  );
