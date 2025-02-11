import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertReturnAsyncCustom_CommentTagFormat =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
