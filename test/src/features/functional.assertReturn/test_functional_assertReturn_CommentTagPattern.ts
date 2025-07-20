import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertReturn_CommentTagPattern = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertReturn(p),
  );
