import typia from "typia";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_SetUnion = _test_application("swagger")("SetUnion", typia.application<[
    SetUnion
], "swagger">());
