import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertParameters_CommentTagNaN = (): void =>
  _test_functional_assertParameters(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertParameters(p),
  );
