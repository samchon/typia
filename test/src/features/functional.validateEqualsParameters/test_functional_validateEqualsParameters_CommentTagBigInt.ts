import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateEqualsParameters_CommentTagBigInt =
  (): void =>
    _test_functional_validateEqualsParameters("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.validateEqualsParameters(p),
    );
