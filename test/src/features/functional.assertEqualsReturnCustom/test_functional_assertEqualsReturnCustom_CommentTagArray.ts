import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_CommentTagArray =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
