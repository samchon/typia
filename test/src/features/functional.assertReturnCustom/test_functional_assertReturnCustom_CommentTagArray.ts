import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertReturnCustom_CommentTagArray =
  _test_functional_assertReturn(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
