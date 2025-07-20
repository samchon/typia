import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertFunctionAsyncCustom_CommentTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "CommentTagArrayUnion",
    )(CommentTagArrayUnion)(
      (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
