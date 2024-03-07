import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_CommentTagLength =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.json.assertStringify<CommentTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
