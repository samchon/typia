import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsParameters_CommentTagNaN =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertEqualsParameters(p),
  );
