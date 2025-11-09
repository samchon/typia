import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_assertParse_CommentTagAtomicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.json.assertParse<CommentTagAtomicUnion>(input),
  );
