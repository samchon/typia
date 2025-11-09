import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectHttpCommentTag = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)