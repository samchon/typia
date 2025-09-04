import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_assertCloneCustom_CommentTagObjectUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.misc.assertClone<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
