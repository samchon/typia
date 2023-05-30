import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagStep } from "../../../../structures/TagStep";
export const test_application_swagger_TagStep = _test_application("swagger")("TagStep", typia.application<[
    TagStep
], "swagger">());
