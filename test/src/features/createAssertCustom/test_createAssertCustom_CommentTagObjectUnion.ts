import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertCustom_CommentTagObjectUnion = (): void =>
  _test_assert(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.createAssert<CommentTagObjectUnion>((p) => new CustomGuardError(p)),
  );
