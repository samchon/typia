import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_assertParseCustom_CommentTagRange = (): void =>
  _test_json_assertParse(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) =>
    typia.json.assertParse<CommentTagRange>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
