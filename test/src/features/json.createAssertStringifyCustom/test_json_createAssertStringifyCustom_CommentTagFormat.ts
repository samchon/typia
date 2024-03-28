import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createAssertStringifyCustom_CommentTagFormat =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.json.createAssertStringify<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );
