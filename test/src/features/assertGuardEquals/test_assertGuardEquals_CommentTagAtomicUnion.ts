import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_CommentTagAtomicUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.assertGuardEquals<CommentTagAtomicUnion>(input),
  );
