import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_CommentTagObjectUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagObjectUnion", 
  })(typia.json.schema<CommentTagObjectUnion, "3.1">());