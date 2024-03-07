import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateEqualsParametersAsync_CommentTagArrayUnion =
  _test_functional_validateEqualsParametersAsync("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.validateEqualsParameters(p),
  );
