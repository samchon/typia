import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_application_ajv_surplus_CommentTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagLength",
  })(typia.json.application<[CommentTagLength], "ajv", true>());
