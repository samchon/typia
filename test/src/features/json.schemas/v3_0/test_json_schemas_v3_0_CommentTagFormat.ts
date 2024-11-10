import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_schemas_v3_0_CommentTagFormat = _test_json_schemas({
  version: "3.0",
  name: "CommentTagFormat",
})(typia.json.schemas<[CommentTagFormat], "3.0">());
