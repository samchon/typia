import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_CommentTagArrayUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
