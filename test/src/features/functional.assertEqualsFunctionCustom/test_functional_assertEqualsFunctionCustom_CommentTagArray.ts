import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsFunctionCustom_CommentTagArray =
  _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
