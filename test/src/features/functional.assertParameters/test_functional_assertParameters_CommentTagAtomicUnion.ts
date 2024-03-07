import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_CommentTagAtomicUnion =
  _test_functional_assertParameters(TypeGuardError)("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
    typia.functional.assertParameters(p),
  );
