import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertParametersCustom_CommentTagArray =
  _test_functional_assertParameters(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
