import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_schema_v3_0_CommentTagType = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagType",
  })(typia.json.schema<CommentTagType, "3.0">());
