import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateEqualsReturn_CommentTagBigInt = (): void =>
  _test_functional_validateEqualsReturn("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.validateEqualsReturn(p),
  );
