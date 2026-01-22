import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertEqualsReturn_CommentTagObjectUnion =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "CommentTagObjectUnion",
    )(CommentTagObjectUnion)(
      (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
        typia.functional.assertEqualsReturn(p),
    );
