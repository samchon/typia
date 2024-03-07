import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_CommentTagAtomicUnion =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.json.assertStringify<CommentTagAtomicUnion>(input),
  );
