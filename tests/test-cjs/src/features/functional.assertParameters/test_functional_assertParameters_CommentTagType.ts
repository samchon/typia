import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertParameters_CommentTagType = (): void =>
  _test_functional_assertParameters(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertParameters(p),
  );
