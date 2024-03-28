import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertReturnCustom_CommentTagObjectUnion =
  _test_functional_assertReturn(CustomGuardError)("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
