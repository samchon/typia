import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_CommentTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagType",
  })(typia.json.application<[CommentTagType], "ajv", false>());
