import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createIsParse_CommentTagArray = (): void =>
  _test_json_isParse("CommentTagArray")<CommentTagArray>(CommentTagArray)(
    typia.json.createIsParse<CommentTagArray>(),
  );
