import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createIs_CommentTagTypeBigInt = (): void =>
  _test_is("CommentTagTypeBigInt")<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
    typia.createIs<CommentTagTypeBigInt>(),
  );
