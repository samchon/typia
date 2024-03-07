import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_CommentTagArray =
  _test_json_assertParse(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) =>
    typia.json.assertParse<CommentTagArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
