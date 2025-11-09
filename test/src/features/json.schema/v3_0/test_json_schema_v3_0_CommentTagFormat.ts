import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_schema_v3_0_CommentTagFormat = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagFormat",
  })(typia.json.schema<CommentTagFormat, "3.0">());
