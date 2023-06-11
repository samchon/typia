import typia from "typia";
import { TagType } from "../../../../structures/TagType";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_TagType = _test_application("ajv")("TagType", typia.application<[
    TagType
], "ajv">());
