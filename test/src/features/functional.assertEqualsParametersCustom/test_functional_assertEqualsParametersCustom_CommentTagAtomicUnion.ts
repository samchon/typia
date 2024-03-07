import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_CommentTagAtomicUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "CommentTagAtomicUnion",
  )(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
