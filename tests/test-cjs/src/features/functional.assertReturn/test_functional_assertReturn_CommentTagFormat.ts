import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertReturn_CommentTagFormat = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertReturn(p),
  );
