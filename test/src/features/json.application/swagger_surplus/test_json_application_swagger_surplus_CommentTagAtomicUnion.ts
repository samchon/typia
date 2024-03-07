import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_CommentTagAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagAtomicUnion",
  })(typia.json.application<[CommentTagAtomicUnion], "swagger", true>());
