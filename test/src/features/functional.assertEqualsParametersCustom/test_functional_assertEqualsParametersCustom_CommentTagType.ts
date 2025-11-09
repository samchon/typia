import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_CommentTagType = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)