import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_CommentTagRange =
  _test_functional_assertParameters(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertParameters(p),
  );
