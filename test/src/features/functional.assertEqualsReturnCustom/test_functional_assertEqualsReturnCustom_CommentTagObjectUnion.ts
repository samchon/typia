import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertEqualsReturnCustom_CommentTagObjectUnion =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "CommentTagObjectUnion",
  )(CommentTagObjectUnion)(
    (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
