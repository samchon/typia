import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertEqualsCustom_CommentTagObjectUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.createAssertEquals<CommentTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
