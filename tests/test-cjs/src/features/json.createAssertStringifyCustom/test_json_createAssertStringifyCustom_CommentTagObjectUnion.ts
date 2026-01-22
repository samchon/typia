import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createAssertStringifyCustom_CommentTagObjectUnion =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "CommentTagObjectUnion",
    )<CommentTagObjectUnion>(CommentTagObjectUnion)(
      typia.json.createAssertStringify<CommentTagObjectUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
