import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsParameters_CommentTagPattern =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertEqualsParameters(p),
  );
