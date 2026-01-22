import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertReturn_CommentTagLength = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertReturn(p),
  );
