import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_CommentTagLength = 
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagLength", 
  })(typia.json.schemas<[CommentTagLength], "3.1">());