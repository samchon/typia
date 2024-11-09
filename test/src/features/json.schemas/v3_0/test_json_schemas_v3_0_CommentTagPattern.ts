import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_CommentTagPattern = 
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagPattern", 
  })(typia.json.schemas<[CommentTagPattern], "3.0">());