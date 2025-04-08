import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_schema_v3_1_CommentTagAtomicUnion = _test_json_schema({
  version: "3.1",
  name: "CommentTagAtomicUnion",
})(typia.json.schema<CommentTagAtomicUnion, "3.1">());
