import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_CommentTagPattern =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagPattern",
  })(typia.json.application<[CommentTagPattern], "ajv", false>());
