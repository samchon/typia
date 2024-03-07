import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_CommentTagLength =
  _test_functional_assertParametersAsync(CustomGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
