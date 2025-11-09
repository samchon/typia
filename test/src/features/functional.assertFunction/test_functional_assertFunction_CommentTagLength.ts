import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertFunction_CommentTagLength = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertFunction(p),
  );
