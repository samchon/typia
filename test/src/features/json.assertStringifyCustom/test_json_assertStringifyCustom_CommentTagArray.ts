import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_assertStringifyCustom_CommentTagArray =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)((input) =>
    typia.json.assertStringify<CommentTagArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
