import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsParametersCustom_CommentTagArray =
  _test_functional_assertEqualsParameters(CustomGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => CommentTagArray) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
