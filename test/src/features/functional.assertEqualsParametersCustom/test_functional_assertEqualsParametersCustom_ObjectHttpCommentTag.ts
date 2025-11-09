import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectHttpCommentTag = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)