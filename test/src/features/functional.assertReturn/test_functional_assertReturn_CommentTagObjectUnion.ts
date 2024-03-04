import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertReturn_CommentTagObjectUnion =
  _test_functional_assertReturn(TypeGuardError)("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
    typia.functional.assertReturn(p),
  );
