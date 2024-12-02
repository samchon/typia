import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_json_schemas_v3_1_CommentTagRange = _test_json_schemas({
  version: "3.1",
  name: "CommentTagRange",
})(typia.json.schemas<[CommentTagRange], "3.1">());
