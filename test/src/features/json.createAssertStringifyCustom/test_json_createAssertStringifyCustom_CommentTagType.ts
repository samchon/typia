import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_CommentTagType =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagType",
  )<CommentTagType>(CommentTagType)(
    typia.json.createAssertStringify<CommentTagType>(
      (p) => new CustomGuardError(p),
    ),
  );
