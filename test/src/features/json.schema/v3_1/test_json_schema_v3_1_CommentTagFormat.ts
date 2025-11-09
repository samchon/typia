import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_CommentTagFormat = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagFormat", 
  })(typia.json.schema<CommentTagFormat, "3.1">());