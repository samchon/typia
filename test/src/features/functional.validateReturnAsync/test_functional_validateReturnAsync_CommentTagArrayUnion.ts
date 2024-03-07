import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateReturnAsync_CommentTagArrayUnion =
  _test_functional_validateReturnAsync("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.validateReturn(p),
  );
