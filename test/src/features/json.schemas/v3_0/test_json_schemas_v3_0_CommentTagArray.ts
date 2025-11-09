import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_CommentTagArray = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagArray", 
  })(typia.json.schemas<[CommentTagArray], "3.0">());