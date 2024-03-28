import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertParametersCustom_CommentTagRange =
  _test_functional_assertParameters(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
