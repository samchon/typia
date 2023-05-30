import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagStep } from "../../../../structures/TagStep";
export const test_application_ajv_TagStep = _test_application("ajv")("TagStep", typia.application<[
    TagStep
], "ajv">());
