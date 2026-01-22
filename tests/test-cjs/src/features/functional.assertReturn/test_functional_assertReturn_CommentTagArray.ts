import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertReturn_CommentTagArray = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertReturn(p),
  );
