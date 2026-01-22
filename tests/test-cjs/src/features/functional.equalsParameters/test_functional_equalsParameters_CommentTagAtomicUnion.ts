import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_equalsParameters_CommentTagAtomicUnion =
  (): void =>
    _test_functional_equalsParameters("CommentTagAtomicUnion")(
      CommentTagAtomicUnion,
    )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.equalsParameters(p),
    );
