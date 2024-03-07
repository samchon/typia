import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_equalsParametersAsync_CommentTagArrayUnion =
  _test_functional_equalsParametersAsync("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.equalsParameters(p),
  );
