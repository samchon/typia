import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_CommentTagRange =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)(
    typia.json.createAssertStringify<CommentTagRange>(
      (p) => new CustomGuardError(p),
    ),
  );
