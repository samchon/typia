import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateEqualsReturn_CommentTagArrayUnion =
  (): void =>
    _test_functional_validateEqualsReturn("CommentTagArrayUnion")(
      CommentTagArrayUnion,
    )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
      typia.functional.validateEqualsReturn(p),
    );
