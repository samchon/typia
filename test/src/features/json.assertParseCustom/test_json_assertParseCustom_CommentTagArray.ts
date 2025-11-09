import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_assertParseCustom_CommentTagArray = (): void =>
  _test_json_assertParse(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) =>
    typia.json.assertParse<CommentTagArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
