import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertReturnCustom_CommentTagPattern = (): void =>
  _test_functional_assertReturn(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
