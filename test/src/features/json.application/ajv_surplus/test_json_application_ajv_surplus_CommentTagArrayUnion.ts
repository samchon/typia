import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_CommentTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagArrayUnion",
  })(typia.json.application<[CommentTagArrayUnion], "ajv", true>());
