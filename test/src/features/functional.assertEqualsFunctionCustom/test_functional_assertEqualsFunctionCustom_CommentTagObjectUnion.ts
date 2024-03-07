import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_CommentTagObjectUnion =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "CommentTagObjectUnion",
  )(CommentTagObjectUnion)(
    (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
