import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_CommentTagRangeBigInt = (): void => _test_functional_assertReturn(CustomGuardError)(
  "CommentTagRangeBigInt"
)(CommentTagRangeBigInt)(
  (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)