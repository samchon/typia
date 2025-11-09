import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createAssertParseCustom_CommentTagDefault = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.json.createAssertParse<CommentTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
