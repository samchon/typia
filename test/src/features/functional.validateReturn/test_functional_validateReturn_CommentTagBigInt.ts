import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateReturn_CommentTagBigInt = (): void =>
  _test_functional_validateReturn("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.validateReturn(p),
  );
