import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_CommentTagDefault = (): void => _test_functional_assertParameters(CustomGuardError)(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)