import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { SetSimple } from "../../../../structures/SetSimple";
export const test_application_swagger_SetSimple = _test_application("swagger")("SetSimple", typia.application<[
    SetSimple
], "swagger">());
