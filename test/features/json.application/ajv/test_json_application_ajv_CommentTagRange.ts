import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_json_application_ajv_CommentTagRange = _test_json_application(
    "ajv",
)("CommentTagRange")(typia.json.application<[CommentTagRange], "ajv">());
