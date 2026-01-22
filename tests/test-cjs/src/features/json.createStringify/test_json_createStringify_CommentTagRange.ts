import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createStringify_CommentTagRange = (): void =>
  _test_json_stringify("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    typia.json.createStringify<CommentTagRange>(),
  );
