import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertFunctionCustom_CommentTagArrayUnion =
  _test_functional_assertFunction(CustomGuardError)("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
