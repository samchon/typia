import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_schema_v3_1_CommentTagArray = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagArray",
  })(typia.json.schema<CommentTagArray, "3.1">());
