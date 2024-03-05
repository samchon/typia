import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_createAssertStringifyCustom_CommentTagAtomicUnion =
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.json.createAssertStringify<CommentTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
