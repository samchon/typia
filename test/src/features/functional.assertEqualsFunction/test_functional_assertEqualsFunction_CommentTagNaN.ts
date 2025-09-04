import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsFunction_CommentTagNaN = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertEqualsFunction(p),
  );
