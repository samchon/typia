import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_CommentTagAtomicUnion = 
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagAtomicUnion", 
  })(typia.json.schemas<[CommentTagAtomicUnion], "3.0">());