import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagArrayUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagArrayUnion",
  )(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
