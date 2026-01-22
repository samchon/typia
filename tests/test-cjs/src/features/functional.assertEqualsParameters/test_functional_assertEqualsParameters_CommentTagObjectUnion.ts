import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertEqualsParameters_CommentTagObjectUnion =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "CommentTagObjectUnion",
    )(CommentTagObjectUnion)(
      (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
        typia.functional.assertEqualsParameters(p),
    );
