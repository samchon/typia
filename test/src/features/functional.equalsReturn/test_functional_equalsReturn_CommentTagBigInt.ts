import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_equalsReturn_CommentTagBigInt = (): void =>
  _test_functional_equalsReturn("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.equalsReturn(p),
  );
