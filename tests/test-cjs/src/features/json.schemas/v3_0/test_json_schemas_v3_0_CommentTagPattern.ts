import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_schemas_v3_0_CommentTagPattern = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagPattern",
  })(typia.json.schemas<[CommentTagPattern], "3.0">());
