import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_CommentTagObjectUnion = 
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagObjectUnion", 
  })(typia.json.schemas<[CommentTagObjectUnion], "3.1">());