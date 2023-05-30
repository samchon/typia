import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { SetUnion } from "../../../../structures/SetUnion";
export const test_application_swagger_SetUnion = _test_application("swagger")("SetUnion", typia.application<[
    SetUnion
], "swagger">());
