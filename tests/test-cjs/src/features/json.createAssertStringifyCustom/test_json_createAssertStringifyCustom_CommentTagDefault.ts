import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createAssertStringifyCustom_CommentTagDefault =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "CommentTagDefault",
    )<CommentTagDefault>(CommentTagDefault)(
      typia.json.createAssertStringify<CommentTagDefault>(
        (p) => new CustomGuardError(p),
      ),
    );
