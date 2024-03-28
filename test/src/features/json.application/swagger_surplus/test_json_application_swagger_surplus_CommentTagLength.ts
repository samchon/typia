import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_application_swagger_surplus_CommentTagLength =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagLength",
  })(typia.json.application<[CommentTagLength], "swagger", true>());
