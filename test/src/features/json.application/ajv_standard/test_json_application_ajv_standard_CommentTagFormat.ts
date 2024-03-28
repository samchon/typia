import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_application_ajv_standard_CommentTagFormat =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagFormat",
  })(typia.json.application<[CommentTagFormat], "ajv", false>());
