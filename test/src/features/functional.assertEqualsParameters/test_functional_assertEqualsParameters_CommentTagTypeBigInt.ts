import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertEqualsParameters_CommentTagTypeBigInt =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "CommentTagTypeBigInt",
    )(CommentTagTypeBigInt)(
      (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
        typia.functional.assertEqualsParameters(p),
    );
