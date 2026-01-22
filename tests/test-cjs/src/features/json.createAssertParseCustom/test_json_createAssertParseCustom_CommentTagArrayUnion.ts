import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createAssertParseCustom_CommentTagArrayUnion =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "CommentTagArrayUnion",
    )<CommentTagArrayUnion>(CommentTagArrayUnion)(
      typia.json.createAssertParse<CommentTagArrayUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
