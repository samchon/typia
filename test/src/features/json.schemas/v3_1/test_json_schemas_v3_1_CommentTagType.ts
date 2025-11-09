import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_CommentTagType = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagType", 
  })(typia.json.schemas<[CommentTagType], "3.1">());