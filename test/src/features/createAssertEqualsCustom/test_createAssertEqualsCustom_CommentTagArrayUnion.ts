import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssertEqualsCustom_CommentTagArrayUnion =
  _test_assertEquals(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createAssertEquals<CommentTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
