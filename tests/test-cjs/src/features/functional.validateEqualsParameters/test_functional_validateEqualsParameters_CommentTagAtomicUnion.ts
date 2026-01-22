import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_validateEqualsParameters_CommentTagAtomicUnion =
  (): void =>
    _test_functional_validateEqualsParameters("CommentTagAtomicUnion")(
      CommentTagAtomicUnion,
    )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.validateEqualsParameters(p),
    );
