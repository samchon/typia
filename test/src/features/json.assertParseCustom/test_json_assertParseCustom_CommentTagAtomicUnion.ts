import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_assertParseCustom_CommentTagAtomicUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.json.assertParse<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
