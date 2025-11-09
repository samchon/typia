import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertParametersCustom_CommentTagObjectUnion =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "CommentTagObjectUnion",
    )(CommentTagObjectUnion)(
      (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
