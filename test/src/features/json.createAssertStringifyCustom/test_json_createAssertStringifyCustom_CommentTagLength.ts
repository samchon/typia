import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_createAssertStringifyCustom_CommentTagLength =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)(
    typia.json.createAssertStringify<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
