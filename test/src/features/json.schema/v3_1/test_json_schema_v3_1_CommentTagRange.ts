import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_json_schema_v3_1_CommentTagRange = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagRange",
  })(typia.json.schema<CommentTagRange, "3.1">());
