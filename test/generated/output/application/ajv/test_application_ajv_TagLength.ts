import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagLength } from "../../../../structures/TagLength";
export const test_application_ajv_TagLength = _test_application("ajv")("TagLength", typia.application<[
    TagLength
], "ajv">());
