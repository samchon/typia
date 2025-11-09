import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_schemas_v3_1_CommentTagPattern = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagPattern",
  })(typia.json.schemas<[CommentTagPattern], "3.1">());
