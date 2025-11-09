import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_CommentTagLength = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagLength", 
  })(typia.json.schema<CommentTagLength, "3.1">());