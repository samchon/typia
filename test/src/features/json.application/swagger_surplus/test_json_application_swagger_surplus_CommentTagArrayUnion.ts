import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_application_swagger_surplus_CommentTagArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagArrayUnion",
  })(typia.json.application<[CommentTagArrayUnion], "swagger", true>());
