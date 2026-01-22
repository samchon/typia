import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_createAssertParseCustom_CommentTagLength = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)(
    typia.json.createAssertParse<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
