import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertReturnCustom_CommentTagDefault = (): void =>
  _test_functional_assertReturn(CustomGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => CommentTagDefault) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
