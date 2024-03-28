import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_application_swagger_standard_CommentTagType =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "CommentTagType",
  })(typia.json.application<[CommentTagType], "swagger", false>());
