import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createAssertEquals_CommentTagTypeBigInt = (): void =>
  _test_assertEquals(TypeGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
    typia.createAssertEquals<CommentTagTypeBigInt>(),
  );
