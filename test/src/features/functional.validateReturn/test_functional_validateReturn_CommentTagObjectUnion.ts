import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateReturn_CommentTagObjectUnion =
  _test_functional_validateReturn("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
    typia.functional.validateReturn(p),
  );
