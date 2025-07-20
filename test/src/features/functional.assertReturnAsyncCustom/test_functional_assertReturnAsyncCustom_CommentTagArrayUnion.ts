import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertReturnAsyncCustom_CommentTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "CommentTagArrayUnion",
    )(CommentTagArrayUnion)(
      (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
