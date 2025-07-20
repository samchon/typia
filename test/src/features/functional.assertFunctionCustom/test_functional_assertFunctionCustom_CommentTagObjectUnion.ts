import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertFunctionCustom_CommentTagObjectUnion =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("CommentTagObjectUnion")(
      CommentTagObjectUnion,
    )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
