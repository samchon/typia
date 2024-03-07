import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_CommentTagArray =
  _test_json_assertParse(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(
    typia.json.createAssertParse<CommentTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
