import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createAssertParseCustom_CommentTagArray =
  _test_json_assertParse(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(
    typia.json.createAssertParse<CommentTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
