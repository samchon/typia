import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsFunctionCustom_CommentTagDefault =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "CommentTagDefault",
    )(CommentTagDefault)((p: (input: CommentTagDefault) => CommentTagDefault) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
