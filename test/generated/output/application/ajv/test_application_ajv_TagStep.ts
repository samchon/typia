import typia from "typia";
import { TagStep } from "../../../structures/TagStep";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_TagStep = _test_application("ajv")("TagStep", typia.application<[
    TagStep
], "ajv">());
