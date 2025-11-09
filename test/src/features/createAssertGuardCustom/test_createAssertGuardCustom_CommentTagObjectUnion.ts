import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertGuardCustom_CommentTagObjectUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.createAssertGuard<CommentTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
