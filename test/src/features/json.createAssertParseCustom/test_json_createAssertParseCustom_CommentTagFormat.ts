import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createAssertParseCustom_CommentTagFormat =
  _test_json_assertParse(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.json.createAssertParse<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );
