import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertReturnAsyncCustom_CommentTagLength =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("CommentTagLength")(
      CommentTagLength,
    )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
