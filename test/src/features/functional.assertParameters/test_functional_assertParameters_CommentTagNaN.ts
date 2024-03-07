import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_CommentTagNaN =
  _test_functional_assertParameters(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertParameters(p),
  );
