import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_application_swagger_surplus_CommentTagFormat =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagFormat",
  })(typia.json.application<[CommentTagFormat], "swagger", true>());
