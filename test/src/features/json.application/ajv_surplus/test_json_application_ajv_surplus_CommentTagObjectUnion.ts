import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_CommentTagObjectUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagObjectUnion",
  })(typia.json.application<[CommentTagObjectUnion], "ajv", true>());
