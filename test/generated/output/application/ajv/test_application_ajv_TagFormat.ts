import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagFormat } from "../../../../structures/TagFormat";
export const test_application_ajv_TagFormat = _test_application("ajv")("TagFormat", typia.application<[
    TagFormat
], "ajv">());
