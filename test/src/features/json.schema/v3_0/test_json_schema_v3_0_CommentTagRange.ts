import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_CommentTagRange = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagRange", 
  })(typia.json.schema<CommentTagRange, "3.0">());