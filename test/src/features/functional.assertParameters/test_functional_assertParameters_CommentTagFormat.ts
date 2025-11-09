import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_CommentTagFormat = (): void => _test_functional_assertParameters(TypeGuardError)(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.assertParameters(p),
)