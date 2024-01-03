import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_ajv_surplus_CommentTagPattern =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagPattern",
  })(typia.json.application<[CommentTagPattern], "ajv", true>());
