import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateEqualsParameters_CommentTagTypeBigInt =
  (): void =>
    _test_functional_validateEqualsParameters("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      typia.functional.validateEqualsParameters(p),
    );
