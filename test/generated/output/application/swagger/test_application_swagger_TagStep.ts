import typia from "typia";
import { TagStep } from "../../../structures/TagStep";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_TagStep = _test_application("swagger")("TagStep", typia.application<[
    TagStep
], "swagger">());
