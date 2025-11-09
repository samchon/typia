import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_assertStringifyCustom_CommentTagRange = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)((input) =>
    typia.json.assertStringify<CommentTagRange>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
