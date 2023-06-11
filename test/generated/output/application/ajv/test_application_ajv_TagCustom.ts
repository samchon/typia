import typia from "typia";
import { TagCustom } from "../../../../structures/TagCustom";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_TagCustom = _test_application("ajv")("TagCustom", typia.application<[
    TagCustom
], "ajv">());
