import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateReturn_CommentTagTypeBigInt = (): void =>
  _test_functional_validateReturn("CommentTagTypeBigInt")(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      typia.functional.validateReturn(p),
  );
