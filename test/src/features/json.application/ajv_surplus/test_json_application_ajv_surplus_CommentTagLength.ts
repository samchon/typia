import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_CommentTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagLength",
  })(typia.json.application<[CommentTagLength], "ajv", true>());
