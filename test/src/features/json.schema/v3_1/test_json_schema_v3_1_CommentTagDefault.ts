import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_json_schema_v3_1_CommentTagDefault = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagDefault",
  })(typia.json.schema<CommentTagDefault, "3.1">());
