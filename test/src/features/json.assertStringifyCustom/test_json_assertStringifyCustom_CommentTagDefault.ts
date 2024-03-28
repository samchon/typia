import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_assertStringifyCustom_CommentTagDefault =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.json.assertStringify<CommentTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
