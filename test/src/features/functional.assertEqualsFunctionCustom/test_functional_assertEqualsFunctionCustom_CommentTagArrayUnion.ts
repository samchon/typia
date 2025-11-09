import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertEqualsFunctionCustom_CommentTagArrayUnion =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "CommentTagArrayUnion",
    )(CommentTagArrayUnion)(
      (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
