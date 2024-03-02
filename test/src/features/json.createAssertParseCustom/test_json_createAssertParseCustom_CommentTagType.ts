import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createAssertParseCustom_CommentTagType =
  _test_json_assertParse(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(
    typia.json.createAssertParse<CommentTagType>(
      (p) => new CustomGuardError(p),
    ),
  );
