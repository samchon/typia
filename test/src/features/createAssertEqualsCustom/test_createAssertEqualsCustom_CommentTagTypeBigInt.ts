import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createAssertEqualsCustom_CommentTagTypeBigInt =
  _test_assertEquals(CustomGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
    typia.createAssertEquals<CommentTagTypeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
