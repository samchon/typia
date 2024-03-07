import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_CommentTagDefault =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagDefault",
  })(typia.json.application<[CommentTagDefault], "ajv", false>());
