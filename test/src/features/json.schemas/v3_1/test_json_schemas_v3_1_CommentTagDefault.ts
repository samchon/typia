import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_json_schemas_v3_1_CommentTagDefault = _test_json_schemas({
  version: "3.1",
  name: "CommentTagDefault",
})(typia.json.schemas<[CommentTagDefault], "3.1">());
