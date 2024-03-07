import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_CommentTagObjectUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "CommentTagObjectUnion",
  )(CommentTagObjectUnion)(
    (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      typia.functional.assertEqualsFunction(p),
  );
