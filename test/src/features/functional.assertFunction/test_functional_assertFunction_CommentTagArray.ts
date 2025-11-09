import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertFunction_CommentTagArray = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertFunction(p),
  );
