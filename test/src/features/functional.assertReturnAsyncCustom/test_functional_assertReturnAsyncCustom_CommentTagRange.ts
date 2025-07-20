import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertReturnAsyncCustom_CommentTagRange =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("CommentTagRange")(
      CommentTagRange,
    )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
