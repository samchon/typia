import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_CommentTagFormat = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)