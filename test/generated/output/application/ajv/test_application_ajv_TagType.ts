import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagType } from "../../../../structures/TagType";
export const test_application_ajv_TagType = _test_application("ajv")("TagType", typia.application<[
    TagType
], "ajv">());
