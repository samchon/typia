import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertParameters_CommentTagLength =
  _test_functional_assertParameters(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertParameters(p),
  );
