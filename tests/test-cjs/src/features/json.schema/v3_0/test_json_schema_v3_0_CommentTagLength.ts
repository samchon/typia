import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_schema_v3_0_CommentTagLength = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagLength",
  })(typia.json.schema<CommentTagLength, "3.0">());
