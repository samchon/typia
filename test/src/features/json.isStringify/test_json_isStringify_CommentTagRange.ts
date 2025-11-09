import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_isStringify_CommentTagRange = (): void =>
  _test_json_isStringify("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    (input) => typia.json.isStringify<CommentTagRange>(input),
  );
