import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagType =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagType",
  )(CommentTagType)((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
