import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_CommentTagLength = 
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagLength", 
  })(typia.json.schemas<[CommentTagLength], "3.0">());