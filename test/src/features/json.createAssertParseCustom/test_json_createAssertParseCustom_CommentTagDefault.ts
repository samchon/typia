import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_CommentTagDefault =
  _test_json_assertParse(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.json.createAssertParse<CommentTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
