import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_assertStringifyCustom_CommentTagAtomicUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.json.assertStringify<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
