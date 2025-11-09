import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_CommentTagArrayUnion = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagArrayUnion", 
  })(typia.json.schemas<[CommentTagArrayUnion], "3.0">());