import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagCustom } from "../../../../structures/TagCustom";
export const test_application_ajv_TagCustom = _test_application("ajv")("TagCustom", typia.application<[
    TagCustom
], "ajv">());
