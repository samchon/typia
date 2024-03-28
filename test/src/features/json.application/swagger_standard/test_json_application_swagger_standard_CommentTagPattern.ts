import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_swagger_standard_CommentTagPattern =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "CommentTagPattern",
  })(typia.json.application<[CommentTagPattern], "swagger", false>());
