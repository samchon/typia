import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_CommentTagRange =
  _test_functional_assertEqualsParameters(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
