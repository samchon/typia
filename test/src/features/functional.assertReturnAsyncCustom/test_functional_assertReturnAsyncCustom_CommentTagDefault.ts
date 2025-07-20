import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertReturnAsyncCustom_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("CommentTagDefault")(
      CommentTagDefault,
    )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
