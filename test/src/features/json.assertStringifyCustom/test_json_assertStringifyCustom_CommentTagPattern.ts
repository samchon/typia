import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_assertStringifyCustom_CommentTagPattern =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.json.assertStringify<CommentTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
