import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertReturnCustom_CommentTagLength = (): void =>
  _test_functional_assertReturn(CustomGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
