import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_createIsParse_CommentTagAtomicUnion = _test_json_isParse(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.json.createIsParse<CommentTagAtomicUnion>(),
);
