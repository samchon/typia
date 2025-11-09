import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectHttpCommentTag = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)