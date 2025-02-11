import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertReturnCustom_CommentTagAtomicUnion =
  _test_functional_assertReturn(CustomGuardError)("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
