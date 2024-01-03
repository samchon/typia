import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_application_ajv_surplus_CommentTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagType",
  })(typia.json.application<[CommentTagType], "ajv", true>());
