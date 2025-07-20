import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertReturn_CommentTagNaN = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.assertReturn(p),
  );
