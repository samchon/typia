import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertGuardEqualsCustom_CommentTagObjectUnion =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "CommentTagObjectUnion",
    )<CommentTagObjectUnion>(CommentTagObjectUnion)(
      typia.createAssertGuardEquals<CommentTagObjectUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
