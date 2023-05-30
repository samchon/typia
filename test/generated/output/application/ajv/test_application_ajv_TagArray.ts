import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagArray } from "../../../../structures/TagArray";
export const test_application_ajv_TagArray = _test_application("ajv")("TagArray", typia.application<[
    TagArray
], "ajv">());
