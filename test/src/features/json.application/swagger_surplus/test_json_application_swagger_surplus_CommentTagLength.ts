import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_CommentTagLength =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagLength",
  })(typia.json.application<[CommentTagLength], "swagger", true>());
