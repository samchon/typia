import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_application_ajv_CommentTagType = _test_json_application(
    "ajv",
)("CommentTagType")(typia.json.application<[CommentTagType], "ajv">());
