import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertEqualsCustom_CommentTagInfinite =
  _test_assertEquals(CustomGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)(
    typia.createAssertEquals<CommentTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
  );
