import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagPattern } from "../../../../structures/TagPattern";
export const test_application_ajv_TagPattern = _test_application("ajv")("TagPattern", typia.application<[
    TagPattern
], "ajv">());
