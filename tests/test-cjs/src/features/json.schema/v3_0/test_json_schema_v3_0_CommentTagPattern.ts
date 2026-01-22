import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_schema_v3_0_CommentTagPattern = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagPattern",
  })(typia.json.schema<CommentTagPattern, "3.0">());
