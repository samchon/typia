import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertFunction_CommentTagNaN = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertFunction(p),
  );
