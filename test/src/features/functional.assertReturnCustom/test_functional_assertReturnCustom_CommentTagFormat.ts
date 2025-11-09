import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_CommentTagFormat = (): void => _test_functional_assertReturn(CustomGuardError)(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)