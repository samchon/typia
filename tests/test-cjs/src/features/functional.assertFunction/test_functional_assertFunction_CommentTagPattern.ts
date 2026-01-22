import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertFunction_CommentTagPattern = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertFunction(p),
  );
