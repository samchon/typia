import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_assertParseCustom_CommentTagArrayUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.json.assertParse<CommentTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
