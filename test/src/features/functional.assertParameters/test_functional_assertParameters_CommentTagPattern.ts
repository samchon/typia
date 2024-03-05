import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertParameters_CommentTagPattern =
  _test_functional_assertParameters(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertParameters(p),
  );
