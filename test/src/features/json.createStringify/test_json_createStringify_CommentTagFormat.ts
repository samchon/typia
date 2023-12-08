import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createStringify_CommentTagFormat = _test_json_stringify(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
  typia.json.createStringify<CommentTagFormat>(),
);
