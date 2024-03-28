import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_assertParseCustom_CommentTagDefault =
  _test_json_assertParse(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.json.assertParse<CommentTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
