import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_validateParametersAsync_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("CommentTagAtomicUnion")(
      CommentTagAtomicUnion,
    )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
      typia.functional.validateParameters(p),
    );
