import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsParameters_CommentTagRange =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertEqualsParameters(p),
  );
