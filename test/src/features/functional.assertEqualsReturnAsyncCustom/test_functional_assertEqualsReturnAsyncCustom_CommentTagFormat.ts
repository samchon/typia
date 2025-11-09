import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagFormat = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)