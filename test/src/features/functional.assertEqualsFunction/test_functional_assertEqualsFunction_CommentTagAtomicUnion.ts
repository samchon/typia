import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_CommentTagAtomicUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "CommentTagAtomicUnion",
  )(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.assertEqualsFunction(p),
  );
