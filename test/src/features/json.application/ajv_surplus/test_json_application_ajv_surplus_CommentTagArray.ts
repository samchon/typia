import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_application_ajv_surplus_CommentTagArray =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagArray",
  })(typia.json.application<[CommentTagArray], "ajv", true>());
