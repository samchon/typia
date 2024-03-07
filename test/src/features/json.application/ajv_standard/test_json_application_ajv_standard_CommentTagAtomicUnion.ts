import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_CommentTagAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagAtomicUnion",
  })(typia.json.application<[CommentTagAtomicUnion], "ajv", false>());
