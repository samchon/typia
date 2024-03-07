import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateFunctionAsync_CommentTagArrayUnion =
  _test_functional_validateFunctionAsync("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.validateFunction(p),
  );
