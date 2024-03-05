import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertReturn_CommentTagType =
  _test_functional_assertReturn(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertReturn(p),
  );
