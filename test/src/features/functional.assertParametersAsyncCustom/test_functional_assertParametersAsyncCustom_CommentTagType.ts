import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertParametersAsyncCustom_CommentTagType =
  _test_functional_assertParametersAsync(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
