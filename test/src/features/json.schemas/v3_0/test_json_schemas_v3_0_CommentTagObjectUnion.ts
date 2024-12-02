import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_schemas_v3_0_CommentTagObjectUnion = _test_json_schemas({
  version: "3.0",
  name: "CommentTagObjectUnion",
})(typia.json.schemas<[CommentTagObjectUnion], "3.0">());
