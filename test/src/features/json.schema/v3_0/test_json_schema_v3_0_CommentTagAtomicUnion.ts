import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_CommentTagAtomicUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "CommentTagAtomicUnion", 
  })(typia.json.schema<CommentTagAtomicUnion, "3.0">());