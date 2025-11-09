import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertParameters_CommentTagArray = (): void =>
  _test_functional_assertParameters(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertParameters(p),
  );
