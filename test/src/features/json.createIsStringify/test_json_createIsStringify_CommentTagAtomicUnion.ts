import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_createIsStringify_CommentTagAtomicUnion = (): void =>
  _test_json_isStringify("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )(typia.json.createIsStringify<CommentTagAtomicUnion>());
