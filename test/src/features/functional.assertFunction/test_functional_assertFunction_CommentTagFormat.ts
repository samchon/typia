import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertFunction_CommentTagFormat = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertFunction(p),
  );
