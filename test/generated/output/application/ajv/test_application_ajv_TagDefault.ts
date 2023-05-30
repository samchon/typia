import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagDefault } from "../../../../structures/TagDefault";
export const test_application_ajv_TagDefault = _test_application("ajv")("TagDefault", typia.application<[
    TagDefault
], "ajv">());
