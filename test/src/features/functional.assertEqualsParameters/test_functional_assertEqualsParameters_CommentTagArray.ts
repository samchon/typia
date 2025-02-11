import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsParameters_CommentTagArray =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertEqualsParameters(p),
  );
