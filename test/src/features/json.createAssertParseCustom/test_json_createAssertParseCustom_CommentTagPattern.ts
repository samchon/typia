import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createAssertParseCustom_CommentTagPattern =
  _test_json_assertParse(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)(
    typia.json.createAssertParse<CommentTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
