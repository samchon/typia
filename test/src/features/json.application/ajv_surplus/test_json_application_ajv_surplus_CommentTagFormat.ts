import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_application_ajv_surplus_CommentTagFormat =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagFormat",
  })(typia.json.application<[CommentTagFormat], "ajv", true>());
