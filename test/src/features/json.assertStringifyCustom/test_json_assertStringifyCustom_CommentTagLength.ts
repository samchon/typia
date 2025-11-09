import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_assertStringifyCustom_CommentTagLength = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.json.assertStringify<CommentTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
