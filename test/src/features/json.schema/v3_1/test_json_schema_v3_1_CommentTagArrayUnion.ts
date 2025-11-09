import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_CommentTagArrayUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "CommentTagArrayUnion", 
  })(typia.json.schema<CommentTagArrayUnion, "3.1">());