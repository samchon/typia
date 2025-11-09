import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createAssertStringifyCustom_CommentTagArrayUnion =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "CommentTagArrayUnion",
    )<CommentTagArrayUnion>(CommentTagArrayUnion)(
      typia.json.createAssertStringify<CommentTagArrayUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
