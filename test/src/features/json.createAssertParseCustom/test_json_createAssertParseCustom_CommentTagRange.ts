import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createAssertParseCustom_CommentTagRange = (): void =>
  _test_json_assertParse(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(
    typia.json.createAssertParse<CommentTagRange>(
      (p) => new CustomGuardError(p),
    ),
  );
