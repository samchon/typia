import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_schemas_v3_1_CommentTagArray = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "CommentTagArray",
  })(typia.json.schemas<[CommentTagArray], "3.1">());
