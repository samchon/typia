import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertReturn_CommentTagDefault =
  _test_functional_assertReturn(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertReturn(p),
  );
