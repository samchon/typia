import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertFunction_CommentTagRange = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertFunction(p),
  );
