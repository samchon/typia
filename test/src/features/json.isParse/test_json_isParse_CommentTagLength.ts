import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_isParse_CommentTagLength = (): void =>
  _test_json_isParse("CommentTagLength")<CommentTagLength>(CommentTagLength)(
    (input) => typia.json.isParse<CommentTagLength>(input),
  );
