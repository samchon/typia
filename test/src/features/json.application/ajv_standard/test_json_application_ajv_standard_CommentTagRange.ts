import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_CommentTagRange =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagRange",
  })(typia.json.application<[CommentTagRange], "ajv", false>());
