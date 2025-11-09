import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "CommentTagAtomicUnion",
    )(CommentTagAtomicUnion)(
      (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
