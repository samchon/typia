import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertEqualsFunction_CommentTagArrayUnion =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "CommentTagArrayUnion",
    )(CommentTagArrayUnion)(
      (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
        typia.functional.assertEqualsFunction(p),
    );
