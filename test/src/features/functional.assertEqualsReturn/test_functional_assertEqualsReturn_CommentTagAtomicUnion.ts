import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertEqualsReturn_CommentTagAtomicUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
