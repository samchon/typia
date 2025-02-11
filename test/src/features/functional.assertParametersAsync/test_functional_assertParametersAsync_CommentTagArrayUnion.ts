import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertParametersAsync_CommentTagArrayUnion =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "CommentTagArrayUnion",
  )(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
      typia.functional.assertParameters(p),
  );
