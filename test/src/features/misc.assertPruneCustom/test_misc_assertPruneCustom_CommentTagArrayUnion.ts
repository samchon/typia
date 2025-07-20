import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_assertPruneCustom_CommentTagArrayUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.misc.assertPrune<CommentTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
