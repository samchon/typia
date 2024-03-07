import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_CommentTagObjectUnion =
  _test_functional_assertFunction(TypeGuardError)("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
    typia.functional.assertFunction(p),
  );
