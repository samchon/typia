import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_assertStringifyCustom_CommentTagObjectUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.json.assertStringify<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
