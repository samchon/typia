import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagObjectUnion } from "../../../../structures/TagObjectUnion";
export const test_application_ajv_TagObjectUnion = _test_application("ajv")("TagObjectUnion", typia.application<[
    TagObjectUnion
], "ajv">());
