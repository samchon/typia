import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertReturnCustom_CommentTagType = (): void =>
  _test_functional_assertReturn(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
