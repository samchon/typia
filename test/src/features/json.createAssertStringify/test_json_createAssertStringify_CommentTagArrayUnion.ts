import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createAssertStringify_CommentTagArrayUnion =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.json.createAssertStringify<CommentTagArrayUnion>(),
  );
