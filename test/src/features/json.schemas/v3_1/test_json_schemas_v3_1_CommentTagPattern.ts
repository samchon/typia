import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_CommentTagPattern = 
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagPattern", 
  })(typia.json.schemas<[CommentTagPattern], "3.1">());