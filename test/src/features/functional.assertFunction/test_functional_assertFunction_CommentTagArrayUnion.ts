import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_CommentTagArrayUnion =
  _test_functional_assertFunction(TypeGuardError)("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
    typia.functional.assertFunction(p),
  );
