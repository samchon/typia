import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_ajv_standard_CommentTagPattern =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagPattern",
  })(typia.json.application<[CommentTagPattern], "ajv", false>());
