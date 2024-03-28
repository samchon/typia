import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_assertStringifyCustom_CommentTagArrayUnion =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.json.assertStringify<CommentTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
