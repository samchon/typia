import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertParametersAsyncCustom_CommentTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "CommentTagArrayUnion",
    )(CommentTagArrayUnion)(
      (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
