import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertFunctionCustom_CommentTagArray = (): void =>
  _test_functional_assertFunction(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
