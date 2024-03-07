import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_CommentTagType =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagType",
  })(typia.json.application<[CommentTagType], "swagger", true>());
