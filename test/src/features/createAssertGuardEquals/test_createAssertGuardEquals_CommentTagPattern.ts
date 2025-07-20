import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertGuardEquals_CommentTagPattern = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)(
    typia.createAssertGuardEquals<CommentTagPattern>(),
  );
