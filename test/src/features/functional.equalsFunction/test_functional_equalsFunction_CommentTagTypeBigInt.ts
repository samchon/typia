import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_equalsFunction_CommentTagTypeBigInt = (): void =>
  _test_functional_equalsFunction("CommentTagTypeBigInt")(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      typia.functional.equalsFunction(p),
  );
