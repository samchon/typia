import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsFunction_CommentTagFormat = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertEqualsFunction(p),
  );
