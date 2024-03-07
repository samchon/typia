import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_CommentTagLength =
  _test_functional_assertEqualsParameters(CustomGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
