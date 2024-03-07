import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateParametersAsync_CommentTagArrayUnion =
  _test_functional_validateParametersAsync("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.validateParameters(p),
  );
