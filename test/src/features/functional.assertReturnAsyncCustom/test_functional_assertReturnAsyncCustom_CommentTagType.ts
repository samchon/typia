import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertReturnAsyncCustom_CommentTagType =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("CommentTagType")(
      CommentTagType,
    )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
