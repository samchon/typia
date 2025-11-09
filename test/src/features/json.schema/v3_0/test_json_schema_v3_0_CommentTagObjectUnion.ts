import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_schema_v3_0_CommentTagObjectUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagObjectUnion",
  })(typia.json.schema<CommentTagObjectUnion, "3.0">());
