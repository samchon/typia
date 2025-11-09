import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_validateParse_CommentTagAtomicUnion = (): void =>
  _test_json_validateParse("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )((input) => typia.json.validateParse<CommentTagAtomicUnion>(input));
