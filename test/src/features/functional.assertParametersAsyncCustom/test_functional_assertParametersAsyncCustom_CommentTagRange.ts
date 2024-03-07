import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_CommentTagRange =
  _test_functional_assertParametersAsync(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
