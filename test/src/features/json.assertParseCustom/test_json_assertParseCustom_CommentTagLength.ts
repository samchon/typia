import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_assertParseCustom_CommentTagLength = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.json.assertParse<CommentTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
