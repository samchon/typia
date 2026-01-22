import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createAssertStringifyCustom_CommentTagPattern =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "CommentTagPattern",
    )<CommentTagPattern>(CommentTagPattern)(
      typia.json.createAssertStringify<CommentTagPattern>(
        (p) => new CustomGuardError(p),
      ),
    );
