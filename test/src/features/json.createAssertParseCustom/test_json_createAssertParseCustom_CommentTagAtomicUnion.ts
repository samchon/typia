import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_createAssertParseCustom_CommentTagAtomicUnion =
  _test_json_assertParse(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.json.createAssertParse<CommentTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
