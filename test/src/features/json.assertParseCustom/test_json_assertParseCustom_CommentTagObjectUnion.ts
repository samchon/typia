import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_assertParseCustom_CommentTagObjectUnion =
  _test_json_assertParse(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.json.assertParse<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
