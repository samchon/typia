import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_CommentTagRange = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagRange", 
  })(typia.json.schemas<[CommentTagRange], "3.1">());