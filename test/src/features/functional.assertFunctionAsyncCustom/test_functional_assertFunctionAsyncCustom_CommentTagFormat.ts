import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagFormat = _test_functional_assertFunctionAsync(CustomGuardError)(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)