import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_CommentTagFormat =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "CommentTagFormat",
  })(typia.json.application<[CommentTagFormat], "swagger", false>());
