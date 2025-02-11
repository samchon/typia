import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsFunction_CommentTagArray =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertEqualsFunction(p),
  );
