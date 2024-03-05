import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsFunction_CommentTagType =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertEqualsFunction(p),
  );
