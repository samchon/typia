import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsParameters_CommentTagDefault =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertEqualsParameters(p),
  );
