import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertEqualsReturn_CommentTagArrayUnion =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagArrayUnion")(
      CommentTagArrayUnion,
    )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
      typia.functional.assertEqualsReturn(p),
    );
