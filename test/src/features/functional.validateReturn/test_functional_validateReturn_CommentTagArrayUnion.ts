import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateReturn_CommentTagArrayUnion = (): void =>
  _test_functional_validateReturn("CommentTagArrayUnion")(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
      typia.functional.validateReturn(p),
  );
