import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_CommentTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagType",
  })(typia.json.application<[CommentTagType], "ajv", true>());
