import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertParametersCustom_CommentTagAtomicUnion =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "CommentTagAtomicUnion",
    )(CommentTagAtomicUnion)(
      (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
