import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assertGuardEqualsCustom_CommentTagObjectUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.assertGuardEquals<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
