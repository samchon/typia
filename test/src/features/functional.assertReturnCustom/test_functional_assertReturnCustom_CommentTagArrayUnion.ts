import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertReturnCustom_CommentTagArrayUnion =
  _test_functional_assertReturn(CustomGuardError)("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
