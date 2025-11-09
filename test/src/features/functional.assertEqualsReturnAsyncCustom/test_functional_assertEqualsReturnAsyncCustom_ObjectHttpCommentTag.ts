import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHttpCommentTag = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)